# ERP Educativo de Recursos TIC

Aplicacion multipagina con Vite para gestionar el uso de portatiles en clase, separando claramente la vista de alumnado y el panel de profesor.

## Vistas

- `index.html` (Alumno): seleccion de nombre + PC y envio de registro.
- `admin.html` (Profesor): configuracion de sesion, validacion en cuadrilla de PCs, envio masivo a Google Forms, importador de PDFs a JSON y consulta historica de incidencias.

## Arquitectura funcional

1. Configuracion separada en 2 archivos:
- `public/app_config.json` (publico, se despliega a `dist/app_config.json`):
- Datos del instituto.
- Numero total de recursos.
- Inventario y ubicaciones.
- Formularios mensuales con `formId` + mapeo `entryMap` de Google Forms.
- URL de inicio.
- `examples/config.json` (ejemplo remoto/privado, se carga por URL):
- `admin_pass`
- `docentes`
- `catalogo_clases`

2. Registro de alumnado:
- El profesor crea una sesion en `admin.html`.
- Se genera URL para alumnado.
- La URL incorpora contexto de sesion (curso, lista de alumnos, etc.).
- El alumno visualiza (sin editar): instituto, recurso, ubicacion, curso, asignatura, dia y tramo horario.
- El alumno selecciona su nombre desde la lista de alumnos de la sesion, elige su PC, indica incidencia opcional y confirma registro.

3. Validacion del profesor:
- Cuadricula de 30 PCs (configurable desde JSON).
- Estado visual por PC (`libre`, `ocupado`, `incidencia`).
- Tabla editable por PC para corregir alumnos/incidencias.
- Regla de unicidad: un alumno no puede quedar asignado en dos PCs a la vez.

4. Envio masivo mensual:
- `Finalizar sesion` busca la clave de mes (`marzo_26`, `abril_26`, etc.).
- Toma `formId` y `entryMap` en `config.json`.
- Envia un POST por cada PC ocupado (o con incidencia) a `formResponse` de Google Forms.

5. Auditoria historica:
- Seleccion de backup mensual.
- Lectura de CSV de Google Sheets.
- Filtro por PC y fecha.
- Tabla de resultados para trazabilidad de incidencias.

6. Importador de PDFs a JSON:
- Pestaña admin para cargar multiples archivos PDF.
- Extraccion automatica de `curso`, `asignatura`, `alumno`.
- Exportacion a JSON descargable.

## Estructura del proyecto

- `index.html` -> Vista alumno.
- `admin.html` -> Vista profesor.
- `src/student-main.js` -> Logica alumno.
- `src/admin-main.js` -> Logica admin.
- `src/lib/config.js` -> Carga config + utilidades.
- `src/lib/session-store.js` -> Estado de sesion local y sincronizacion en navegador.
- `src/lib/google.js` -> Envio a Google Form.
- `src/lib/csv.js` -> Lectura/parser CSV para auditoria.
- `src/lib/url-session.js` -> Contexto de sesion en URL.
- `public/app_config.json` -> Configuracion publica de la app.
- `examples/config.json` -> Ejemplo de configuracion remota (admin/docentes/catalogo).
- `vite.config.js` -> Build multipagina (`main` + `admin`).

## Instalacion

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

## Extraccion local desde `src/alumnos`

Para generar un JSON masivo desde los PDFs del repositorio:

```bash
npm run extract:alumnos
```

Se genera `src/alumnos/alumnos-export.json`.

## Build para despliegue

```bash
npm run build
```

El build queda en `dist/`.

## Despliegue

Publica el contenido de `dist/` en cualquier hosting estatico (Netlify, Vercel Static, GitHub Pages, Nginx, Apache).

## Configuracion de Google Forms

En `examples/config.json`, cada mes necesita:

- `formId`: ID de Google Form (`/d/e/<ID>/...`) o URL completa `formResponse`.
- `entryMap`: relacion campo logico -> `entry.xxxxxxx` real del formulario.

Campos esperados por la app:
- `docente`
- `ubicacion`
- `curso`
- `asignatura`
- `fecha`
- `pc`
- `alumnos`
- `incidencia`
- `sessionId`

## Carga de sesion desde Google Drive (Alumno)

Puedes indicar en `examples/config.json`:

```json
{
  "sessionUrl": "https://drive.google.com/uc?export=download&id=TU_ARCHIVO_JSON"
}
```

La vista de alumno intentara leer esa URL al abrirse. Si el JSON remoto existe, usara esos datos de sesion (alumnos, curso, asignatura, ubicacion, recurso, etc.).

Formato esperado del JSON remoto (ejemplo en `examples/session.example.json`):
- Objeto de sesion unico con `sessionId`, `students`, `curso`, `asignatura`, `ubicacion`, `recurso`, `totalPCs`.
- O un objeto con `sessions: []`.
- O un array de sesiones.

Si hay `sid` en la URL del alumno, se intentara seleccionar la sesion remota con ese `sessionId`.

## Tramos de hora

La sesion usa tramos fijos:
- `1º hora (8:00-9:00)`
- `2º hora (9:00-10:00)`
- `3º hora (10:00-11:00)`
- `Recreo (11:00-11:30)`
- `4º hora (11:30-12:30)`
- `5º hora (12:30-13:30)`
- `6º hora (13:30-14:30)`

## Flujo recomendado de administracion

1. En `admin.html`, inicia sesion con la contrasena.
2. En la pestaña `Configuracion`, carga el JSON desde URL o archivo local.
3. Crea la sesion (docente, recurso, ubicacion, curso, asignatura, fecha y hora, lista de alumnos).
4. Comparte la URL de alumnado generada por el panel (incluye `configUrl` si usas una configuracion remota).
5. Supervisa en la pestaña de validacion el avance de registros (`Registrados X/Y`).
6. Cuando todos esten revisados, pulsa `Finalizar sesion y enviar a Google Form`.

## Limitacion importante (modo sin backend)

La sincronizacion de registros es local al navegador/origen (LocalStorage + BroadcastChannel). Para tiempo real entre multiples dispositivos necesitas un backend realtime (Firebase, Supabase, API propia o Apps Script endpoint).
