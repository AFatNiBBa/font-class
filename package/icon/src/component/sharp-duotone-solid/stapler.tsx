
import { Icon, generic } from "../../index";

/**
 * A component that renders the `stapler` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stapler?s=sharp-duotone-solid stapler}
 * @preview ![stapler](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAyMTkuNEw2NCAzNTJsMzg0IDAgMC02NGMtMTI4LTIyLjktMjU2LTQ1LjctMzg0LTY4LjZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik02NDAgMzA0bDAtNjRMMjU2LjYgNDguM2MtMjEuNC0xMC43LTQ1LTE2LjMtNjktMTYuM0MxMzEuMSAzMiA3OS4yIDYyLjggNTIuMSAxMTIuNEwwIDIwOGw0NDggODAgMCAxMjhMMzIgNDE2bDAgNjQgNDE2IDAgOTYgMCA5NiAwIDAtMTc2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Stapler: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 219.4L64 352l384 0 0-64c-128-22.9-256-45.7-384-68.6z" />
            <path d="M640 304l0-64L256.6 48.3c-21.4-10.7-45-16.3-69-16.3C131.1 32 79.2 62.8 52.1 112.4L0 208l448 80 0 128L32 416l0 64 416 0 96 0 96 0 0-176z" />
    </Icon>
);

export default Stapler;