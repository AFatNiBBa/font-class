
import { Icon, generic } from "../../index";

/**
 * A component that renders the `taxi-bus` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/taxi-bus?s=duotone taxi-bus}
 * @preview ![taxi-bus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE3NiAwQzc3Ljk5OSAwIDAgMjcuNjI1IDAgNjIuODc1VjM1NC42MjVDMCAzNzAuODc1IDEzLjEyNSAzODQgMjkuMzc1IDM4NEg0OFY0MTZDNDggNDMzLjY3MiA2Mi4zMjggNDQ4IDgwIDQ0OEg5NkMxMTMuNjcyIDQ0OCAxMjggNDMzLjY3MiAxMjggNDE2VjM4NEgxOTJWMzQyQzE5MiAzMTIuNTU5IDIwNi45ODggMjg2LjE0MSAyMzEuMjcgMjcxLjAwNEwyNDYuOTM2IDIyNEgxOTJWODBIMjczLjM3NUMyODEuMzc1IDgwIDI4OCA4Ni42MjUgMjg4IDk0LjYyNVYxNTMuNDk2QzMwMS43NDQgMTQyLjA3NCAzMTguMTIzIDEzMy45MiAzMzYgMTMwLjI1MlYxMjhDMzM2IDExMy44NzEgMzQyLjI1IDEwMS4yNzcgMzUyIDkyLjQ4NFY2Mi44NzVDMzUyIDI3LjYyNSAyNzMuOTk5IDAgMTc2IDBaTTgwIDMyOEM2Ni43NSAzMjggNTYgMzE3LjI1IDU2IDMwNFM2Ni43NSAyODAgODAgMjgwUzEwNCAyOTAuNzUgMTA0IDMwNFM5My4yNSAzMjggODAgMzI4Wk0xNjAgMjI0SDc4LjYyNUM3MC42MjUgMjI0IDY0IDIxNy4zNzUgNjQgMjA5LjM3NVY5NC42MjVDNjQgODYuNjI1IDcwLjYyNSA4MCA3OC42MjUgODBIMTYwVjIyNFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNjA2LjUxNiAyOTMuNTUxTDU3OS43ODEgMjEzLjMzNEM1NjkuMTY0IDE4MS40ODIgNTM5LjM1OSAxNjAgNTA1Ljc4NSAxNjBINDk2VjEyOEM0OTYgMTE5LjE2MiA0ODguODM2IDExMiA0ODAgMTEySDM4NEMzNzUuMTY0IDExMiAzNjggMTE5LjE2MiAzNjggMTI4VjE2MEgzNTguMjE5QzMyNC42NDUgMTYwIDI5NC44MzYgMTgxLjQ4NiAyODQuMjE5IDIxMy4zNEwyNTcuNDg0IDI5My41NTFDMjM3LjkzOCAzMDEuMDI5IDIyNCAzMTkuODI2IDIyNCAzNDJWNDgwQzIyNCA0OTcuNjcyIDIzOC4zMjggNTEyIDI1NiA1MTJIMjcyQzI4OS42NzIgNTEyIDMwNCA0OTcuNjcyIDMwNCA0ODBWNDQ3SDU2MFY0ODBDNTYwIDQ5Ny42NzIgNTc0LjMyOCA1MTIgNTkyIDUxMkg2MDhDNjI1LjY3MiA1MTIgNjQwIDQ5Ny42NzIgNjQwIDQ4MFYzNDJDNjQwIDMxOS44MjYgNjI2LjA2MiAzMDEuMDI5IDYwNi41MTYgMjkzLjU1MVpNMzQ0LjkzNCAyMzMuNTc2QzM0Ni44NDQgMjI3Ljg0OCAzNTIuMTg0IDIyNCAzNTguMjE5IDIyNEg1MDUuNzg1QzUxMS44MiAyMjQgNTE3LjE1NiAyMjcuODQ2IDUxOS4wNjIgMjMzLjU3TDUzNy4yMDMgMjg4SDMyNi43OTdMMzQ0LjkzNCAyMzMuNTc2Wk0zMDQgMzkyQzI5MC43NDYgMzkyIDI4MCAzODEuMjU0IDI4MCAzNjhDMjgwIDM1NC43NDQgMjkwLjc0NiAzNDQgMzA0IDM0NFMzMjggMzU0Ljc0NCAzMjggMzY4QzMyOCAzODEuMjU0IDMxNy4yNTQgMzkyIDMwNCAzOTJaTTU2MCAzOTJDNTQ2Ljc0NiAzOTIgNTM2IDM4MS4yNTQgNTM2IDM2OEM1MzYgMzU0Ljc0NCA1NDYuNzQ2IDM0NCA1NjAgMzQ0UzU4NCAzNTQuNzQ0IDU4NCAzNjhDNTg0IDM4MS4yNTQgNTczLjI1NCAzOTIgNTYwIDM5MloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
const TaxiBus: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M176 0C77.999 0 0 27.625 0 62.875V354.625C0 370.875 13.125 384 29.375 384H48V416C48 433.672 62.328 448 80 448H96C113.672 448 128 433.672 128 416V384H192V342C192 312.559 206.988 286.141 231.27 271.004L246.936 224H192V80H273.375C281.375 80 288 86.625 288 94.625V153.496C301.744 142.074 318.123 133.92 336 130.252V128C336 113.871 342.25 101.277 352 92.484V62.875C352 27.625 273.999 0 176 0ZM80 328C66.75 328 56 317.25 56 304S66.75 280 80 280S104 290.75 104 304S93.25 328 80 328ZM160 224H78.625C70.625 224 64 217.375 64 209.375V94.625C64 86.625 70.625 80 78.625 80H160V224Z" />
            <path d="M606.516 293.551L579.781 213.334C569.164 181.482 539.359 160 505.785 160H496V128C496 119.162 488.836 112 480 112H384C375.164 112 368 119.162 368 128V160H358.219C324.645 160 294.836 181.486 284.219 213.34L257.484 293.551C237.938 301.029 224 319.826 224 342V480C224 497.672 238.328 512 256 512H272C289.672 512 304 497.672 304 480V447H560V480C560 497.672 574.328 512 592 512H608C625.672 512 640 497.672 640 480V342C640 319.826 626.062 301.029 606.516 293.551ZM344.934 233.576C346.844 227.848 352.184 224 358.219 224H505.785C511.82 224 517.156 227.846 519.062 233.57L537.203 288H326.797L344.934 233.576ZM304 392C290.746 392 280 381.254 280 368C280 354.744 290.746 344 304 344S328 354.744 328 368C328 381.254 317.254 392 304 392ZM560 392C546.746 392 536 381.254 536 368C536 354.744 546.746 344 560 344S584 354.744 584 368C584 381.254 573.254 392 560 392Z" />
    </Icon>
);

export default TaxiBus;