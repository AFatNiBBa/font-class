
import { Icon, generic } from "../../index";

/**
 * A component that renders the `truck-pickup` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-pickup?s=sharp-duotone-solid truck-pickup}
 * @preview ![truck-pickup](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik04MCA0MDBhODAgODAgMCAxIDAgMTYwIDBBODAgODAgMCAxIDAgODAgNDAwem0zMjAgMGE4MCA4MCAwIDEgMCAxNjAgMCA4MCA4MCAwIDEgMCAtMTYwIDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yMjQgMzJsMzIgMCAxMjggMCAxNS40IDBMNDA5IDQ0IDUyNy40IDE5Mmw4MC42IDAgMCA5NiAzMiAwIDAgNjQtMzIgMC0yNi44IDBjLTE4LTM3LjgtNTYuNS02NC0xMDEuMi02NHMtODMuMiAyNi4yLTEwMS4yIDY0bC0xMTcuNiAwYy0xOC0zNy44LTU2LjUtNjQtMTAxLjItNjRzLTgzLjIgMjYuMi0xMDEuMiA2NEwzMiAzNTIgMCAzNTJsMC02NCAzMiAwIDAtOTYgMTkyIDAgMC0xMjggMC0zMnpNMzY4LjYgOTZMMjg4IDk2bDAgOTYgMTU3LjQgMEwzNjguNiA5NnoiLz48L3N2Zz4=|width=32|height=32)
 */
const TruckPickup: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M80 400a80 80 0 1 0 160 0A80 80 0 1 0 80 400zm320 0a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z" />
            <path d="M224 32l32 0 128 0 15.4 0L409 44 527.4 192l80.6 0 0 96 32 0 0 64-32 0-26.8 0c-18-37.8-56.5-64-101.2-64s-83.2 26.2-101.2 64l-117.6 0c-18-37.8-56.5-64-101.2-64s-83.2 26.2-101.2 64L32 352 0 352l0-64 32 0 0-96 192 0 0-128 0-32zM368.6 96L288 96l0 96 157.4 0L368.6 96z" />
    </Icon>
);

export default TruckPickup;