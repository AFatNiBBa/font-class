
import { Icon, generic } from "../../index";

/**
 * A component that renders the `truck-pickup` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-pickup?s=duotone truck-pickup}
 * @preview ![truck-pickup](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik04MCA0MDBhODAgODAgMCAxIDAgMTYwIDBBODAgODAgMCAxIDAgODAgNDAwem0zMjAgMGE4MCA4MCAwIDEgMCAxNjAgMCA4MCA4MCAwIDEgMCAtMTYwIDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yODggOTZsMCA5NiAxNTcuNCAwTDM2OC42IDk2IDI4OCA5NnpNNDE4LjYgNTZMNTI3LjQgMTkybDQ4LjYgMGMxNy43IDAgMzIgMTQuMyAzMiAzMmwwIDY0YzE3LjcgMCAzMiAxNC4zIDMyIDMycy0xNC4zIDMyLTMyIDMybC0yNi44IDBjLTE4LTM3LjgtNTYuNS02NC0xMDEuMi02NHMtODMuMiAyNi4yLTEwMS4yIDY0bC0xMTcuNiAwYy0xOC0zNy44LTU2LjUtNjQtMTAxLjItNjRzLTgzLjIgMjYuMi0xMDEuMiA2NEwzMiAzNTJjLTE3LjcgMC0zMi0xNC4zLTMyLTMyczE0LjMtMzIgMzItMzJsMC02NGMwLTE3LjcgMTQuMy0zMiAzMi0zMmwxNjAgMCAwLTExMmMwLTI2LjUgMjEuNS00OCA0OC00OGw5Ni42IDBjMTkuNCAwIDM3LjggOC44IDUwIDI0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const TruckPickup: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M80 400a80 80 0 1 0 160 0A80 80 0 1 0 80 400zm320 0a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z" />
            <path d="M288 96l0 96 157.4 0L368.6 96 288 96zM418.6 56L527.4 192l48.6 0c17.7 0 32 14.3 32 32l0 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l-26.8 0c-18-37.8-56.5-64-101.2-64s-83.2 26.2-101.2 64l-117.6 0c-18-37.8-56.5-64-101.2-64s-83.2 26.2-101.2 64L32 352c-17.7 0-32-14.3-32-32s14.3-32 32-32l0-64c0-17.7 14.3-32 32-32l160 0 0-112c0-26.5 21.5-48 48-48l96.6 0c19.4 0 37.8 8.8 50 24z" />
    </Icon>
);

export default TruckPickup;