
import { Icon, generic } from "../../index";

/**
 * A component that renders the `car-side-bolt` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car-side-bolt?s=sharp-duotone-solid car-side-bolt}
 * @preview ![car-side-bolt](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCA0MzJhODAgODAgMCAxIDAgMTYwIDBBODAgODAgMCAxIDAgNjQgNDMyem0zNTIgMGE4MCA4MCAwIDEgMCAxNjAgMCA4MCA4MCAwIDEgMCAtMTYwIDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik05NiA2NEw0Mi43IDIyNCAwIDIyNCAwIDQzMmwzMiAwYzAtNjEuOSA1MC4xLTExMiAxMTItMTEyczExMiA1MC4xIDExMiAxMTJsMTI4IDBjMC02MS45IDUwLjEtMTEyIDExMi0xMTJzMTEyIDUwLjEgMTEyIDExMmwzMiAwIDAtMjA4LTExNy4zIDBMNDE2IDY0IDk2IDY0ek0yMDggMjQwTDMzNiAxMTJsLTI0IDk2IDg4IDBMMjcyIDMzNmwyNC05Ni04OCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CarSideBolt: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 432a80 80 0 1 0 160 0A80 80 0 1 0 64 432zm352 0a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z" />
            <path d="M96 64L42.7 224 0 224 0 432l32 0c0-61.9 50.1-112 112-112s112 50.1 112 112l128 0c0-61.9 50.1-112 112-112s112 50.1 112 112l32 0 0-208-117.3 0L416 64 96 64zM208 240L336 112l-24 96 88 0L272 336l24-96-88 0z" />
    </Icon>
);

export default CarSideBolt;