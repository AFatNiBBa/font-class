
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `floppy-disks` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/floppy-disks?s=regular floppy-disks}
 * @preview ![floppy-disks](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OCA0MzJWOTZDMjEuNDkgOTYgMCAxMTcuNDkyIDAgMTQ0VjQ0OEMwIDQ4My4zNDQgMjguNjU0IDUxMiA2NCA1MTJIMzY4QzM5NC41MSA1MTIgNDE2IDQ5MC41MDggNDE2IDQ2NEg4MEM2Mi4zMjYgNDY0IDQ4IDQ0OS42NzIgNDggNDMyWk00OTcuOTQ1IDk3Ljk0NUw0MTQuMDU1IDE0LjA1M0M0MDUuMDU1IDUuMDU1IDM5Mi44NTIgMCAzODAuMTI1IDBIMTYwQzEyNC42NTQgMCA5NiAyOC42NTIgOTYgNjRWMzUyQzk2IDM4Ny4zNDYgMTI0LjY1NCA0MTYgMTYwIDQxNkg0NDhDNDgzLjM0NiA0MTYgNTEyIDM4Ny4zNDYgNTEyIDM1MlYxMzEuODc1QzUxMiAxMTkuMTQ4IDUwNi45NDUgMTA2Ljk0MyA0OTcuOTQ1IDk3Ljk0NVpNMjI0IDQ4SDMzNlY5NkgyMjRWNDhaTTQ2NCAzNTJDNDY0IDM2MC44MzYgNDU2LjgzNiAzNjggNDQ4IDM2OEgxNjBDMTUxLjE2NCAzNjggMTQ0IDM2MC44MzYgMTQ0IDM1MlY2NEMxNDQgNTUuMTYyIDE1MS4xNjQgNDggMTYwIDQ4SDE3NlYxMjBDMTc2IDEzMy4yNTQgMTg2Ljc0NiAxNDQgMjAwIDE0NEgzNjBDMzczLjI1NCAxNDQgMzg0IDEzMy4yNTQgMzg0IDEyMFY1MS44NzVMNDYyLjIzMiAxMzAuMTA3QzQ2My4zNjMgMTMxLjIzOCA0NjQgMTMyLjc3MyA0NjQgMTM0LjM3NVYzNTJaTTMwNCAxOTJDMjY4Ljc5OSAxOTIgMjQwIDIyMC43OTkgMjQwIDI1NkMyNDAgMjkxLjE5OSAyNjguNzk5IDMyMCAzMDQgMzIwQzMzOS4xOTkgMzIwIDM2OCAyOTEuMTk5IDM2OCAyNTZDMzY4IDIyMC43OTkgMzM5LjE5OSAxOTIgMzA0IDE5MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function FloppyDisks(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M48 432V96C21.49 96 0 117.492 0 144V448C0 483.344 28.654 512 64 512H368C394.51 512 416 490.508 416 464H80C62.326 464 48 449.672 48 432ZM497.945 97.945L414.055 14.053C405.055 5.055 392.852 0 380.125 0H160C124.654 0 96 28.652 96 64V352C96 387.346 124.654 416 160 416H448C483.346 416 512 387.346 512 352V131.875C512 119.148 506.945 106.943 497.945 97.945ZM224 48H336V96H224V48ZM464 352C464 360.836 456.836 368 448 368H160C151.164 368 144 360.836 144 352V64C144 55.162 151.164 48 160 48H176V120C176 133.254 186.746 144 200 144H360C373.254 144 384 133.254 384 120V51.875L462.232 130.107C463.363 131.238 464 132.773 464 134.375V352ZM304 192C268.799 192 240 220.799 240 256C240 291.199 268.799 320 304 320C339.199 320 368 291.199 368 256C368 220.799 339.199 192 304 192Z" />
        </Icon>
    </>
}