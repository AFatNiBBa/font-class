
import { Icon, generic } from "../../index";

/**
 * A component that renders the `wrench-simple` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wrench-simple?s=sharp-duotone-solid wrench-simple}
 * @preview ![wrench-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiAzNDIuM2MxNC4xIDguMiAyOS40IDE0LjYgNDUuNSAxOWM4IDIuMiAxNi4zIDMuOSAyNC43IDVjNC4yIC42IDguNSAxIDEyLjggMS4zYzIuMSAuMSA0LjMgLjMgNi41IC4zczQuMyAuMSA2LjUgLjFjMzUgMCA2Ny44LTkuNCA5Ni0yNS43TDI4OCA1MTIgOTYgNTEybDAtMTY5Ljd6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xOTIgMjI0bC02NC02NFYwQzUzLjQgMjYuNCAwIDkyLjQgMCAxNzZDMCAyODIgODYgMzY4IDE5MiAzNjhzMTkyLTg2IDE5Mi0xOTJDMzg0IDkyLjQgMzMwLjYgMjYuNCAyNTYgMFYxNjBsLTY0IDY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const WrenchSimple: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M96 342.3c14.1 8.2 29.4 14.6 45.5 19c8 2.2 16.3 3.9 24.7 5c4.2 .6 8.5 1 12.8 1.3c2.1 .1 4.3 .3 6.5 .3s4.3 .1 6.5 .1c35 0 67.8-9.4 96-25.7L288 512 96 512l0-169.7z" />
            <path d="M192 224l-64-64V0C53.4 26.4 0 92.4 0 176C0 282 86 368 192 368s192-86 192-192C384 92.4 330.6 26.4 256 0V160l-64 64z" />
    </Icon>
);

export default WrenchSimple;