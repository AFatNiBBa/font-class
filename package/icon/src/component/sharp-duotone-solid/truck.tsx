
import { Icon, generic } from "../../index";

/**
 * A component that renders the `truck` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck?s=sharp-duotone-solid truck}
 * @preview ![truck](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiA0MzJhODAgODAgMCAxIDAgMTYwIDBBODAgODAgMCAxIDAgOTYgNDMyem0yODggMGE4MCA4MCAwIDEgMCAxNjAgMCA4MCA4MCAwIDEgMCAtMTYwIDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik00MTYgMEwwIDAgMCA0MTZsNjUuMSAwYzcuOC01NC4zIDU0LjQtOTYgMTEwLjktOTZzMTAzLjEgNDEuNyAxMTAuOSA5Nmw2Ni4zIDBjNy44LTU0LjMgNTQuNC05NiAxMTAuOS05NnMxMDMuMSA0MS43IDExMC45IDk2bDEuMSAwIDMyIDAgMzIgMCAwLTY0LTMyIDAgMC02NCAwLTMyIDAtMzIgMC0xMy4zLTkuNC05LjQtOTYtOTZMNDkzLjMgOTYgNDgwIDk2bC02NCAwIDAtOTZ6bTAgMTYwbDUwLjcgMEw1NDQgMjM3LjNsMCAxOC43LTEyOCAwIDAtOTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Truck: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 432a80 80 0 1 0 160 0A80 80 0 1 0 96 432zm288 0a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z" />
            <path d="M416 0L0 0 0 416l65.1 0c7.8-54.3 54.4-96 110.9-96s103.1 41.7 110.9 96l66.3 0c7.8-54.3 54.4-96 110.9-96s103.1 41.7 110.9 96l1.1 0 32 0 32 0 0-64-32 0 0-64 0-32 0-32 0-13.3-9.4-9.4-96-96L493.3 96 480 96l-64 0 0-96zm0 160l50.7 0L544 237.3l0 18.7-128 0 0-96z" />
    </Icon>
);

export default Truck;