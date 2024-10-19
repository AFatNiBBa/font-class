
import { Icon, generic } from "../../index";

/**
 * A component that renders the `stapler` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stapler?s=duotone stapler}
 * @preview ![stapler](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAyMTkuNEw2NCAzMjBjMCAxNy43IDE0LjMgMzIgMzIgMzJsMzUyIDAgMC02NGMtMTI4LTIyLjktMjU2LTQ1LjctMzg0LTY4LjZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik02NDAgMzA0bDAtNC43YzAtMzYuNC0yMC41LTY5LjYtNTMuMS04NS45TDI2MC43IDUwLjRDMjM2LjYgMzguMyAyMDkuOSAzMiAxODIuOSAzMkMxMjguMiAzMiA3Ni43IDU3LjggNDMuOCAxMDEuNkw4LjIgMTQ5LjFDMi45IDE1Ni4yIDAgMTY0LjggMCAxNzMuN2MwIDE5LjkgMTQuMiAzNi45IDMzLjggNDAuNEw0NDggMjg4bDAgMTI4TDY0IDQxNmMtMTcuNyAwLTMyIDE0LjMtMzIgMzJzMTQuMyAzMiAzMiAzMmwzODQgMCA2NCAwIDgwIDBjMjYuNSAwIDQ4LTIxLjUgNDgtNDhsMC0xMjh6Ii8+PC9zdmc+|width=32|height=32)
 */
const Stapler: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 219.4L64 320c0 17.7 14.3 32 32 32l352 0 0-64c-128-22.9-256-45.7-384-68.6z" />
            <path d="M640 304l0-4.7c0-36.4-20.5-69.6-53.1-85.9L260.7 50.4C236.6 38.3 209.9 32 182.9 32C128.2 32 76.7 57.8 43.8 101.6L8.2 149.1C2.9 156.2 0 164.8 0 173.7c0 19.9 14.2 36.9 33.8 40.4L448 288l0 128L64 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0 64 0 80 0c26.5 0 48-21.5 48-48l0-128z" />
    </Icon>
);

export default Stapler;