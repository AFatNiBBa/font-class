
import { Icon, generic } from "../../index";

/**
 * A component that renders the `crow` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crow?s=sharp-duotone-solid crow}
 * @preview ![crow](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yNTkuMiAzODRsMTguNiA0NS4xIDE0IDM0IDE0IDM0IDYuMSAxNC45IDUxLjkgMC0xMy42LTMzLjEtMTQtMzQtMTQtMzRMMzExLjEgMzg0bC01MS45IDB6bTk2IDBsNDYuNiAxMTMuMiA2LjEgMTQuOSA1MS45IDAtMTMuNi0zMy4xLTQyLTEwMmMtMTUuNiA0LjQtMzIgNi45LTQ5IDcuMXpNNTIzLjkgMzJDNTM2LjUgNDcuMiA1NDQgNjYuNyA1NDQgODhsMCAzMiA5Ni0yNCAwLTMyTDU5MiAzMmwtNjguMSAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNDU2IDBjLTQ4LjYgMC04OCAzOS40LTg4IDg4bDAgMjkuMkwuMyA0MDBsMzkgNTAuN0wxMjYuMSAzODQgMzUyIDM4NGMxMDYgMCAxOTItODYgMTkyLTE5MmwwLTY0IDAtNDBjMC00OC42LTM5LjQtODgtODgtODh6bTAgNjRhMjQgMjQgMCAxIDEgMCA0OCAyNCAyNCAwIDEgMSAwLTQ4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Crow: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M259.2 384l18.6 45.1 14 34 14 34 6.1 14.9 51.9 0-13.6-33.1-14-34-14-34L311.1 384l-51.9 0zm96 0l46.6 113.2 6.1 14.9 51.9 0-13.6-33.1-42-102c-15.6 4.4-32 6.9-49 7.1zM523.9 32C536.5 47.2 544 66.7 544 88l0 32 96-24 0-32L592 32l-68.1 0z" />
            <path d="M456 0c-48.6 0-88 39.4-88 88l0 29.2L.3 400l39 50.7L126.1 384 352 384c106 0 192-86 192-192l0-64 0-40c0-48.6-39.4-88-88-88zm0 64a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Crow;