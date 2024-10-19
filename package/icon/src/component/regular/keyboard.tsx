
import { Icon } from "../../index";

/**
 * A component that renders the `keyboard` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/keyboard?s=regular keyboard}
 * @preview ![keyboard](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTIgNjRINjRDMjguNjU0IDY0IDAgOTIuNjU0IDAgMTI4VjM4NEMwIDQxOS4zNDYgMjguNjU0IDQ0OCA2NCA0NDhINTEyQzU0Ny4zNDYgNDQ4IDU3NiA0MTkuMzQ2IDU3NiAzODRWMTI4QzU3NiA5Mi42NTQgNTQ3LjM0NiA2NCA1MTIgNjRaTTUyOCAzODRDNTI4IDM5Mi44MjIgNTIwLjgyMiA0MDAgNTEyIDQwMEg2NEM1NS4xNzggNDAwIDQ4IDM5Mi44MjIgNDggMzg0VjEyOEM0OCAxMTkuMTc4IDU1LjE3OCAxMTIgNjQgMTEySDUxMkM1MjAuODIyIDExMiA1MjggMTE5LjE3OCA1MjggMTI4VjM4NFpNMTQwIDE1MkgxMTZDMTA5LjM0NCAxNTIgMTA0IDE1Ny4zNDQgMTA0IDE2NFYxODhDMTA0IDE5NC42NTYgMTA5LjM0NCAyMDAgMTE2IDIwMEgxNDBDMTQ2LjY1NiAyMDAgMTUyIDE5NC42NTYgMTUyIDE4OFYxNjRDMTUyIDE1Ny4zNDQgMTQ2LjY1NiAxNTIgMTQwIDE1MlpNMTk2IDIwMEgyMjBDMjI2LjY1NiAyMDAgMjMyIDE5NC42NTYgMjMyIDE4OFYxNjRDMjMyIDE1Ny4zNDQgMjI2LjY1NiAxNTIgMjIwIDE1MkgxOTZDMTg5LjM0NCAxNTIgMTg0IDE1Ny4zNDQgMTg0IDE2NFYxODhDMTg0IDE5NC42NTYgMTg5LjM0NCAyMDAgMTk2IDIwMFpNMjc2IDIwMEgzMDBDMzA2LjY1NiAyMDAgMzEyIDE5NC42NTYgMzEyIDE4OFYxNjRDMzEyIDE1Ny4zNDQgMzA2LjY1NiAxNTIgMzAwIDE1MkgyNzZDMjY5LjM0NCAxNTIgMjY0IDE1Ny4zNDQgMjY0IDE2NFYxODhDMjY0IDE5NC42NTYgMjY5LjM0NCAyMDAgMjc2IDIwMFpNMzU2IDIwMEgzODBDMzg2LjY1NiAyMDAgMzkyIDE5NC42NTYgMzkyIDE4OFYxNjRDMzkyIDE1Ny4zNDQgMzg2LjY1NiAxNTIgMzgwIDE1MkgzNTZDMzQ5LjM0NCAxNTIgMzQ0IDE1Ny4zNDQgMzQ0IDE2NFYxODhDMzQ0IDE5NC42NTYgMzQ5LjM0NCAyMDAgMzU2IDIwMFpNNDYwIDE1Mkg0MzZDNDI5LjM0NCAxNTIgNDI0IDE1Ny4zNDQgNDI0IDE2NFYxODhDNDI0IDE5NC42NTYgNDI5LjM0NCAyMDAgNDM2IDIwMEg0NjBDNDY2LjY1NiAyMDAgNDcyIDE5NC42NTYgNDcyIDE4OFYxNjRDNDcyIDE1Ny4zNDQgNDY2LjY1NiAxNTIgNDYwIDE1MlpNMTQwIDIzMkgxMTZDMTA5LjM0NCAyMzIgMTA0IDIzNy4zNDQgMTA0IDI0NFYyNjhDMTA0IDI3NC42NTYgMTA5LjM0NCAyODAgMTE2IDI4MEgxNDBDMTQ2LjY1NiAyODAgMTUyIDI3NC42NTYgMTUyIDI2OFYyNDRDMTUyIDIzNy4zNDQgMTQ2LjY1NiAyMzIgMTQwIDIzMlpNMTk2IDI4MEgyMjBDMjI2LjY1NiAyODAgMjMyIDI3NC42NTYgMjMyIDI2OFYyNDRDMjMyIDIzNy4zNDQgMjI2LjY1NiAyMzIgMjIwIDIzMkgxOTZDMTg5LjM0NCAyMzIgMTg0IDIzNy4zNDQgMTg0IDI0NFYyNjhDMTg0IDI3NC42NTYgMTg5LjM0NCAyODAgMTk2IDI4MFpNMjc2IDI4MEgzMDBDMzA2LjY1NiAyODAgMzEyIDI3NC42NTYgMzEyIDI2OFYyNDRDMzEyIDIzNy4zNDQgMzA2LjY1NiAyMzIgMzAwIDIzMkgyNzZDMjY5LjM0NCAyMzIgMjY0IDIzNy4zNDQgMjY0IDI0NFYyNjhDMjY0IDI3NC42NTYgMjY5LjM0NCAyODAgMjc2IDI4MFpNMzU2IDI4MEgzODBDMzg2LjY1NiAyODAgMzkyIDI3NC42NTYgMzkyIDI2OFYyNDRDMzkyIDIzNy4zNDQgMzg2LjY1NiAyMzIgMzgwIDIzMkgzNTZDMzQ5LjM0NCAyMzIgMzQ0IDIzNy4zNDQgMzQ0IDI0NFYyNjhDMzQ0IDI3NC42NTYgMzQ5LjM0NCAyODAgMzU2IDI4MFpNNDYwIDIzMkg0MzZDNDI5LjM0NCAyMzIgNDI0IDIzNy4zNDQgNDI0IDI0NFYyNjhDNDI0IDI3NC42NTYgNDI5LjM0NCAyODAgNDM2IDI4MEg0NjBDNDY2LjY1NiAyODAgNDcyIDI3NC42NTYgNDcyIDI2OFYyNDRDNDcyIDIzNy4zNDQgNDY2LjY1NiAyMzIgNDYwIDIzMlpNNDAwIDMyMEgxNzZDMTY3LjEyNSAzMjAgMTYwIDMyNy4xMjUgMTYwIDMzNlYzNTJDMTYwIDM2MC44NzUgMTY3LjEyNSAzNjggMTc2IDM2OEg0MDBDNDA4Ljg3NSAzNjggNDE2IDM2MC44NzUgNDE2IDM1MlYzMzZDNDE2IDMyNy4xMjUgNDA4Ljg3NSAzMjAgNDAwIDMyMFoiLz48L3N2Zz4=|width=32|height=32)
 */
const Keyboard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M512 64H64C28.654 64 0 92.654 0 128V384C0 419.346 28.654 448 64 448H512C547.346 448 576 419.346 576 384V128C576 92.654 547.346 64 512 64ZM528 384C528 392.822 520.822 400 512 400H64C55.178 400 48 392.822 48 384V128C48 119.178 55.178 112 64 112H512C520.822 112 528 119.178 528 128V384ZM140 152H116C109.344 152 104 157.344 104 164V188C104 194.656 109.344 200 116 200H140C146.656 200 152 194.656 152 188V164C152 157.344 146.656 152 140 152ZM196 200H220C226.656 200 232 194.656 232 188V164C232 157.344 226.656 152 220 152H196C189.344 152 184 157.344 184 164V188C184 194.656 189.344 200 196 200ZM276 200H300C306.656 200 312 194.656 312 188V164C312 157.344 306.656 152 300 152H276C269.344 152 264 157.344 264 164V188C264 194.656 269.344 200 276 200ZM356 200H380C386.656 200 392 194.656 392 188V164C392 157.344 386.656 152 380 152H356C349.344 152 344 157.344 344 164V188C344 194.656 349.344 200 356 200ZM460 152H436C429.344 152 424 157.344 424 164V188C424 194.656 429.344 200 436 200H460C466.656 200 472 194.656 472 188V164C472 157.344 466.656 152 460 152ZM140 232H116C109.344 232 104 237.344 104 244V268C104 274.656 109.344 280 116 280H140C146.656 280 152 274.656 152 268V244C152 237.344 146.656 232 140 232ZM196 280H220C226.656 280 232 274.656 232 268V244C232 237.344 226.656 232 220 232H196C189.344 232 184 237.344 184 244V268C184 274.656 189.344 280 196 280ZM276 280H300C306.656 280 312 274.656 312 268V244C312 237.344 306.656 232 300 232H276C269.344 232 264 237.344 264 244V268C264 274.656 269.344 280 276 280ZM356 280H380C386.656 280 392 274.656 392 268V244C392 237.344 386.656 232 380 232H356C349.344 232 344 237.344 344 244V268C344 274.656 349.344 280 356 280ZM460 232H436C429.344 232 424 237.344 424 244V268C424 274.656 429.344 280 436 280H460C466.656 280 472 274.656 472 268V244C472 237.344 466.656 232 460 232ZM400 320H176C167.125 320 160 327.125 160 336V352C160 360.875 167.125 368 176 368H400C408.875 368 416 360.875 416 352V336C416 327.125 408.875 320 400 320Z" />
    </Icon>
);

export default Keyboard;