
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hexagon-minus` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon-minus?s=duotone hexagon-minus}
 * @preview ![hexagon-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik03LjQgMjU2YzAgMTIuNCAzLjIgMjQuOSA5LjYgMzZsODguMyAxNTIuOWMxMi45IDIyLjMgMzYuNiAzNiA2Mi40IDM2bDE3Ni42IDBjMjUuNyAwIDQ5LjUtMTMuNyA2Mi40LTM2TDQ5NC45IDI5MmM2LjQtMTEuMSA5LjYtMjMuNiA5LjYtMzZzLTMuMi0yNC45LTkuNi0zNkw0MDYuNiA2Ny4xYy0xMi45LTIyLjMtMzYuNi0zNi02Mi40LTM2bC0xNzYuNiAwYy0yNS43IDAtNDkuNSAxMy43LTYyLjQgMzZMMTcuMSAyMjBjLTYuNCAxMS4xLTkuNiAyMy42LTkuNiAzNnpNMTYwIDI1NmMwLTEzLjMgMTAuNy0yNCAyNC0yNGwxNDQgMGMxMy4zIDAgMjQgMTAuNyAyNCAyNHMtMTAuNyAyNC0yNCAyNGwtMTQ0IDBjLTEzLjMgMC0yNC0xMC43LTI0LTI0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTYwIDI1NmMwLTEzLjMgMTAuNy0yNCAyNC0yNGwxNDQgMGMxMy4zIDAgMjQgMTAuNyAyNCAyNHMtMTAuNyAyNC0yNCAyNGwtMTQ0IDBjLTEzLjMgMC0yNC0xMC43LTI0LTI0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const HexagonMinus: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M7.4 256c0 12.4 3.2 24.9 9.6 36l88.3 152.9c12.9 22.3 36.6 36 62.4 36l176.6 0c25.7 0 49.5-13.7 62.4-36L494.9 292c6.4-11.1 9.6-23.6 9.6-36s-3.2-24.9-9.6-36L406.6 67.1c-12.9-22.3-36.6-36-62.4-36l-176.6 0c-25.7 0-49.5 13.7-62.4 36L17.1 220c-6.4 11.1-9.6 23.6-9.6 36zM160 256c0-13.3 10.7-24 24-24l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24z" />
            <path d="M160 256c0-13.3 10.7-24 24-24l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24z" />
    </Icon>
);

export default HexagonMinus;