
import { Icon, generic } from "../../index";

/**
 * A component that renders the `caravan-simple` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/caravan-simple?s=sharp-duotone-solid caravan-simple}
 * @preview ![caravan-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAxMjhsMCAxMjggMTkyIDAgMC0xMjhMNjQgMTI4em00OCAzMDRhODAgODAgMCAxIDAgMTYwIDAgODAgODAgMCAxIDAgLTE2MCAwek0zMjAgMTI4bDAgMTI4IDEyOCAwIDAtMTI4LTEyOCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNDE2IDMyTDAgMzIgMCA0MTZsODEuMSAwYzcuOC01NC4zIDU0LjQtOTYgMTEwLjktOTZzMTAzLjEgNDEuNyAxMTAuOSA5Nkw1NzYgNDE2bDMyIDAgMzIgMCAwLTY0LTMyIDAtMzIgMCAwLTE2MGMwLTg4LjQtNzEuNi0xNjAtMTYwLTE2MHpNNjQgMTI4bDE5MiAwIDAgMTI4TDY0IDI1NmwwLTEyOHptMzg0IDBsMCAxMjgtMTI4IDAgMC0xMjggMTI4IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const CaravanSimple: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 128l0 128 192 0 0-128L64 128zm48 304a80 80 0 1 0 160 0 80 80 0 1 0 -160 0zM320 128l0 128 128 0 0-128-128 0z" />
            <path d="M416 32L0 32 0 416l81.1 0c7.8-54.3 54.4-96 110.9-96s103.1 41.7 110.9 96L576 416l32 0 32 0 0-64-32 0-32 0 0-160c0-88.4-71.6-160-160-160zM64 128l192 0 0 128L64 256l0-128zm384 0l0 128-128 0 0-128 128 0z" />
    </Icon>
);

export default CaravanSimple;