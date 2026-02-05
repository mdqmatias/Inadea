# Plan de Implementación - Rediseño Web Inadea

Rediseño de la web de Inadea utilizando Next.js, enfocado en mensajes de alto impacto, una interfaz moderna y contenido administrable.

## Revisión del Usuario Requerida

> [!IMPORTANT]
> **Estrategia de Contenido Administrable**: Implementaré un archivo `data/content.json` para gestionar las secciones solicitadas como "administrables" (Banner, Equipo, Productos, etc.). Esto permitirá una fácil integración con un CMS en el futuro.
> **Identidad Visual**: Utilizaré una paleta basada en los colores tradicionales de Inadea (Rojo, Blanco y Gris oscuro/Negro).

## Cambios Propuestos

### Estructura Core

- **Next.js 14/15 (App Router)**: Para mejor rendimiento y SEO.
- **Tailwind CSS**: Para un diseño moderno y responsivo.

### Gestión de Contenido

Uso de un archivo structured data para:

- Hero Banner (texto de impacto sobre sobrevida)
- Equipo (integrantes, roles)
- Productos (modelos de DEA y especificaciones)
- Confían en nosotros (logos)
- Datos de contacto (IG corregido a `inadea.ok`)
- Prensa

### Componentes y UI

- **Sección Hero**: Estadísticas impactantes de sobrevida sin DEA.
- **Sección Cardioprotección**: Reutilización del concepto explicativo con iconos modernos.
- **Sección Nosotros**: Integración de "Premios Inadea por la Vida".
- **Sección Productos**: Nuevo diseño comparativo para los DEAs.
- **Sección Ley**: Reubicada y corregida como Ley 27.159.
- **Sección Contacto**: Simplificada, sin cursos y con links corregidos.

## Plan de Verificación

- `npm run build`: Para asegurar que no hay errores de compilación.
- Verificación manual de links (especialmente Instagram).
- Pruebas de diseño responsivo en móviles.
