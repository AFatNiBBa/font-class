
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `file-spreadsheet` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/file-spreadsheet?s=light file-spreadsheet}
 * @preview ![file-spreadsheet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjUuMjU2IDEyNS4yNTRMMjU4Ljc0NiAxOC43NDZDMjQ2Ljc0NCA2Ljc0MiAyMzAuNDY1IDAgMjEzLjQ5IDBINjRDMjguNjU0IDAgMCAyOC42NTQgMCA2NFY0NDhDMCA0ODMuMzQ2IDI4LjY1NCA1MTIgNjQgNTEySDMyMEMzNTUuMzQ4IDUxMiAzODQgNDgzLjM0NiAzODQgNDQ4VjE3MC41MUMzODQgMTUzLjUzNSAzNzcuMjU4IDEzNy4yNTggMzY1LjI1NiAxMjUuMjU0Wk0yMjQgMzQuMDc2QzIyOC40NzcgMzUuNjQzIDIzMi42NjYgMzcuOTIyIDIzNi4xMTkgNDEuMzc1TDM0Mi42MjcgMTQ3Ljg3OUMzNDYuMDggMTUxLjMzMiAzNDguMzU3IDE1NS41MjMgMzQ5LjkyNCAxNjBIMjQwQzIzMS4xODggMTYwIDIyNCAxNTIuODI4IDIyNCAxNDRWMzQuMDc2Wk0zNTIgNDQ4QzM1MiA0NjUuNjQ1IDMzNy42NDUgNDgwIDMyMCA0ODBINjRDNDYuMzU1IDQ4MCAzMiA0NjUuNjQ1IDMyIDQ0OFY2NEMzMiA0Ni4zNTUgNDYuMzU1IDMyIDY0IDMySDE5MlYxNDRDMTkyIDE3MC40NjkgMjEzLjUzMSAxOTIgMjQwIDE5MkgzNTJWNDQ4Wk02NCAyNTZWNDE2QzY0IDQzMy42NzQgNzguMzI4IDQ0OCA5NiA0NDhIMjg4QzMwNS42NzQgNDQ4IDMyMCA0MzMuNjc0IDMyMCA0MTZWMjU2QzMyMCAyMzguMzI2IDMwNS42NzQgMjI0IDI4OCAyMjRIOTZDNzguMzI4IDIyNCA2NCAyMzguMzI2IDY0IDI1NlpNMTI4IDQxNkg5NlYzODRIMTI4VjQxNlpNMTI4IDM1Mkg5NlYzMjBIMTI4VjM1MlpNMjI0IDQxNkgxNjBWMzg0SDIyNFY0MTZaTTIyNCAzNTJIMTYwVjMyMEgyMjRWMzUyWk0yODggNDE2SDI1NlYzODRIMjg4VjQxNlpNMjg4IDM1MkgyNTZWMzIwSDI4OFYzNTJaTTI4OCAyODhIOTZWMjU2SDI4OFYyODhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function FileSpreadsheet(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M365.256 125.254L258.746 18.746C246.744 6.742 230.465 0 213.49 0H64C28.654 0 0 28.654 0 64V448C0 483.346 28.654 512 64 512H320C355.348 512 384 483.346 384 448V170.51C384 153.535 377.258 137.258 365.256 125.254ZM224 34.076C228.477 35.643 232.666 37.922 236.119 41.375L342.627 147.879C346.08 151.332 348.357 155.523 349.924 160H240C231.188 160 224 152.828 224 144V34.076ZM352 448C352 465.645 337.645 480 320 480H64C46.355 480 32 465.645 32 448V64C32 46.355 46.355 32 64 32H192V144C192 170.469 213.531 192 240 192H352V448ZM64 256V416C64 433.674 78.328 448 96 448H288C305.674 448 320 433.674 320 416V256C320 238.326 305.674 224 288 224H96C78.328 224 64 238.326 64 256ZM128 416H96V384H128V416ZM128 352H96V320H128V352ZM224 416H160V384H224V416ZM224 352H160V320H224V352ZM288 416H256V384H288V416ZM288 352H256V320H288V352ZM288 288H96V256H288V288Z" />
        </Icon>
    </>
}