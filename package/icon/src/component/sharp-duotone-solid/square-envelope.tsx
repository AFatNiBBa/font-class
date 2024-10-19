
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-envelope` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-envelope?s=sharp-duotone-solid square-envelope}
 * @preview ![square-envelope](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNDgwbDQ0OCAwIDAtNDQ4TDAgMzJ6TTY0IDE0NGwzMjAgMCAwIDMzLjRMMjI0IDI3Ny4xIDY0IDE3Ny40IDY0IDE0NHptMCA3MS4xbDE1MS41IDk0LjUgOC41IDUuMyA4LjUtNS4zTDM4NCAyMTUuMSAzODQgMzY4IDY0IDM2OGwwLTE1Mi45eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzg0IDE0NEw2NCAxNDRsMCAzMy40IDE2MCA5OS43IDE2MC05OS43IDAtMzMuNHptMCA3MS4xTDIzMi41IDMwOS42bC04LjUgNS4zLTguNS01LjNMNjQgMjE1LjEgNjQgMzY4bDMyMCAwIDAtMTUyLjl6Ii8+PC9zdmc+|width=32|height=32)
 */
const SquareEnvelope: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM64 144l320 0 0 33.4L224 277.1 64 177.4 64 144zm0 71.1l151.5 94.5 8.5 5.3 8.5-5.3L384 215.1 384 368 64 368l0-152.9z" />
            <path d="M384 144L64 144l0 33.4 160 99.7 160-99.7 0-33.4zm0 71.1L232.5 309.6l-8.5 5.3-8.5-5.3L64 215.1 64 368l320 0 0-152.9z" />
    </Icon>
);

export default SquareEnvelope;