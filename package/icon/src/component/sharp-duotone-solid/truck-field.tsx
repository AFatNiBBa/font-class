
import { Icon, generic } from "../../index";

/**
 * A component that renders the `truck-field` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-field?s=sharp-duotone-solid truck-field}
 * @preview ![truck-field](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiA0MDBhODAgODAgMCAxIDAgMTYwIDBBODAgODAgMCAxIDAgOTYgNDAwem0yODggMGE4MCA4MCAwIDEgMCAxNjAgMCA4MCA4MCAwIDEgMCAtMTYwIDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zMiAzMmwzNTIgMCAwIDMyIDY0IDAgMjAuOCAwIDguNCAxOSA2Mi43IDE0MSA2OC4xIDAgMCA5NiAzMiAwIDAgNjQtMzIgMC0zMy4xIDBjLTcuOC01NC4zLTU0LjQtOTYtMTEwLjktOTZzLTEwMy4xIDQxLjctMTEwLjkgOTZsLTY2LjMgMGMtNy44LTU0LjMtNTQuNC05Ni0xMTAuOS05NnMtMTAzLjEgNDEuNy0xMTAuOSA5NkwzMiAzODQgMCAzODRsMC02NCAzMiAwIDAtMzJMMCAyODggMCAxMjhsMzIgMCAwLTk2ek0zODQgMjI0bDg1LjkgMC00Mi43LTk2TDM4NCAxMjhsMCA5NnoiLz48L3N2Zz4=|width=32|height=32)
 */
const TruckField: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 400a80 80 0 1 0 160 0A80 80 0 1 0 96 400zm288 0a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z" />
            <path d="M32 32l352 0 0 32 64 0 20.8 0 8.4 19 62.7 141 68.1 0 0 96 32 0 0 64-32 0-33.1 0c-7.8-54.3-54.4-96-110.9-96s-103.1 41.7-110.9 96l-66.3 0c-7.8-54.3-54.4-96-110.9-96s-103.1 41.7-110.9 96L32 384 0 384l0-64 32 0 0-32L0 288 0 128l32 0 0-96zM384 224l85.9 0-42.7-96L384 128l0 96z" />
    </Icon>
);

export default TruckField;