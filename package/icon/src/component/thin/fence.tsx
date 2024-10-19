
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `fence` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/fence?s=thin fence}
 * @preview ![fence](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NjkuNiA2Ni4xMzVMNTI0Ljc5OSA2LjQwMkM1MjEuNiAyLjEzNSA1MTYuNzk5IDAgNTEyIDBDNTA3LjE5OSAwIDUwMi40IDIuMTM1IDQ5OS4xOTkgNi40MDJMNDU0LjM5OCA2Ni4xMzVDNDUwLjI0NCA3MS42NzQgNDQ4IDc4LjQxMiA0NDggODUuMzM2VjE1MkgzNTJWODUuMzM2QzM1MiA3OC40MTIgMzQ5Ljc1NCA3MS42NzQgMzQ1LjYgNjYuMTM1TDMwMC43OTkgNi40MDJDMjk3LjYgMi4xMzUgMjkyLjc5OSAwIDI4OCAwQzI4My4xOTkgMCAyNzguNCAyLjEzNSAyNzUuMTk5IDYuNDAyTDIzMC4zOTggNjYuMTM1QzIyNi4yNDQgNzEuNjc0IDIyNCA3OC40MTIgMjI0IDg1LjMzNlYxNTJIMTI4Vjg1LjMzNkMxMjggNzguNDEyIDEyNS43NTYgNzEuNjc0IDEyMS42MDIgNjYuMTM1TDc2LjgwMSA2LjQwMkM3My42IDIuMTM1IDY4LjgwMSAwIDY0IDBDNTkuMjAxIDAgNTQuNCAyLjEzNSA1MS4yMDEgNi40MDJMNi40IDY2LjEzNUMyLjI0NiA3MS42NzQgMCA3OC40MTIgMCA4NS4zMzZWNDgwQzAgNDk3LjY3MiAxNC4zMjYgNTEyIDMyIDUxMkg5NkMxMTMuNjc0IDUxMiAxMjggNDk3LjY3MiAxMjggNDgwVjQyNEgyMjRWNDgwQzIyNCA0OTcuNjcyIDIzOC4zMjYgNTEyIDI1NiA1MTJIMzIwQzMzNy42NzQgNTEyIDM1MiA0OTcuNjcyIDM1MiA0ODBWNDI0SDQ0OFY0ODBDNDQ4IDQ5Ny42NzIgNDYyLjMyNiA1MTIgNDgwIDUxMkg1NDRDNTYxLjY3NCA1MTIgNTc2IDQ5Ny42NzIgNTc2IDQ4MFY4NS4zMzZDNTc2IDc4LjQxMiA1NzMuNzU0IDcxLjY3NCA1NjkuNiA2Ni4xMzVaTTExMiA0ODBDMTEyIDQ4OC44MjIgMTA0LjgyMiA0OTYgOTYgNDk2SDMyQzIzLjE3OCA0OTYgMTYgNDg4LjgyMiAxNiA0ODBWODUuMzM2QzE2IDgxLjg5NiAxNy4xMzcgNzguNDg2IDE5LjE5OSA3NS43MzRMNjMuOTY3IDE2LjAwNEM2My45NzEgMTYuMDAyIDYzLjk4MiAxNiA2NCAxNlYxNi4wMDJMMTA4LjgwMSA3NS43MzRDMTEwLjg2MyA3OC40ODQgMTEyIDgxLjg5NSAxMTIgODUuMzM2VjQ4MFpNMjI0IDQwOEgxMjhWMzYwSDIyNFY0MDhaTTIyNCAzNDRIMTI4VjIzMkgyMjRWMzQ0Wk0yMjQgMjE2SDEyOFYxNjhIMjI0VjIxNlpNMzM2IDQ4MEMzMzYgNDg4LjgyMiAzMjguODIyIDQ5NiAzMjAgNDk2SDI1NkMyNDcuMTc4IDQ5NiAyNDAgNDg4LjgyMiAyNDAgNDgwVjg1LjMzNkMyNDAgODEuODk1IDI0MS4xMzcgNzguNDg0IDI0My4xOTcgNzUuNzM0TDI4Ny45NjcgMTYuMDA0QzI4Ny45NjkgMTYuMDAyIDI4Ny45ODIgMTYgMjg4IDE2VjE2LjAwMkwzMzIuNzk5IDc1LjczNEMzMzQuODYzIDc4LjQ4NiAzMzYgODEuODk2IDMzNiA4NS4zMzZWNDgwWk00NDggNDA4SDM1MlYzNjBINDQ4VjQwOFpNNDQ4IDM0NEgzNTJWMjMySDQ0OFYzNDRaTTQ0OCAyMTZIMzUyVjE2OEg0NDhWMjE2Wk01NjAgNDgwQzU2MCA0ODguODIyIDU1Mi44MjIgNDk2IDU0NCA0OTZINDgwQzQ3MS4xNzggNDk2IDQ2NCA0ODguODIyIDQ2NCA0ODBWODUuMzM2QzQ2NCA4MS44OTUgNDY1LjEzNyA3OC40ODQgNDY3LjE5NyA3NS43MzRMNTExLjk2NyAxNi4wMDRDNTExLjk2OSAxNi4wMDIgNTExLjk4MiAxNiA1MTIgMTZWMTYuMDAyTDU1Ni43OTkgNzUuNzM0QzU1OC44NjMgNzguNDg2IDU2MCA4MS44OTYgNTYwIDg1LjMzNlY0ODBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Fence(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M569.6 66.135L524.799 6.402C521.6 2.135 516.799 0 512 0C507.199 0 502.4 2.135 499.199 6.402L454.398 66.135C450.244 71.674 448 78.412 448 85.336V152H352V85.336C352 78.412 349.754 71.674 345.6 66.135L300.799 6.402C297.6 2.135 292.799 0 288 0C283.199 0 278.4 2.135 275.199 6.402L230.398 66.135C226.244 71.674 224 78.412 224 85.336V152H128V85.336C128 78.412 125.756 71.674 121.602 66.135L76.801 6.402C73.6 2.135 68.801 0 64 0C59.201 0 54.4 2.135 51.201 6.402L6.4 66.135C2.246 71.674 0 78.412 0 85.336V480C0 497.672 14.326 512 32 512H96C113.674 512 128 497.672 128 480V424H224V480C224 497.672 238.326 512 256 512H320C337.674 512 352 497.672 352 480V424H448V480C448 497.672 462.326 512 480 512H544C561.674 512 576 497.672 576 480V85.336C576 78.412 573.754 71.674 569.6 66.135ZM112 480C112 488.822 104.822 496 96 496H32C23.178 496 16 488.822 16 480V85.336C16 81.896 17.137 78.486 19.199 75.734L63.967 16.004C63.971 16.002 63.982 16 64 16V16.002L108.801 75.734C110.863 78.484 112 81.895 112 85.336V480ZM224 408H128V360H224V408ZM224 344H128V232H224V344ZM224 216H128V168H224V216ZM336 480C336 488.822 328.822 496 320 496H256C247.178 496 240 488.822 240 480V85.336C240 81.895 241.137 78.484 243.197 75.734L287.967 16.004C287.969 16.002 287.982 16 288 16V16.002L332.799 75.734C334.863 78.486 336 81.896 336 85.336V480ZM448 408H352V360H448V408ZM448 344H352V232H448V344ZM448 216H352V168H448V216ZM560 480C560 488.822 552.822 496 544 496H480C471.178 496 464 488.822 464 480V85.336C464 81.895 465.137 78.484 467.197 75.734L511.967 16.004C511.969 16.002 511.982 16 512 16V16.002L556.799 75.734C558.863 78.486 560 81.896 560 85.336V480Z" />
        </Icon>
    </>
}