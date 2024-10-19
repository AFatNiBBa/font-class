
import { Icon } from "../../index";

/**
 * A component that renders the `border-none` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/border-none?s=light border-none}
 * @preview ![border-none](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMjggMjMyQzExNC43NDYgMjMyIDEwNCAyNDIuNzQ0IDEwNCAyNTZDMTA0IDI2OS4yNTQgMTE0Ljc0NiAyODAgMTI4IDI4MFMxNTIgMjY5LjI1NCAxNTIgMjU2QzE1MiAyNDIuNzQ0IDE0MS4yNTQgMjMyIDEyOCAyMzJaTTMyIDQwQzE4Ljc0NiA0MCA4IDUwLjc0NCA4IDY0QzggNzcuMjU0IDE4Ljc0NiA4OCAzMiA4OFM1NiA3Ny4yNTQgNTYgNjRDNTYgNTAuNzQ0IDQ1LjI1NCA0MCAzMiA0MFpNMTI4IDQyNEMxMTQuNzQ2IDQyNCAxMDQgNDM0Ljc0NCAxMDQgNDQ4QzEwNCA0NjEuMjU0IDExNC43NDYgNDcyIDEyOCA0NzJTMTUyIDQ2MS4yNTQgMTUyIDQ0OEMxNTIgNDM0Ljc0NCAxNDEuMjU0IDQyNCAxMjggNDI0Wk0xMjggNDBDMTE0Ljc0NiA0MCAxMDQgNTAuNzQ0IDEwNCA2NEMxMDQgNzcuMjU0IDExNC43NDYgODggMTI4IDg4UzE1MiA3Ny4yNTQgMTUyIDY0QzE1MiA1MC43NDQgMTQxLjI1NCA0MCAxMjggNDBaTTIyNCAzMjhDMjEwLjc0NiAzMjggMjAwIDMzOC43NDQgMjAwIDM1MkMyMDAgMzY1LjI1NCAyMTAuNzQ2IDM3NiAyMjQgMzc2UzI0OCAzNjUuMjU0IDI0OCAzNTJDMjQ4IDMzOC43NDQgMjM3LjI1NCAzMjggMjI0IDMyOFpNNDE2IDg4QzQyOS4yNTQgODggNDQwIDc3LjI1NCA0NDAgNjRDNDQwIDUwLjc0NCA0MjkuMjU0IDQwIDQxNiA0MFMzOTIgNTAuNzQ0IDM5MiA2NEMzOTIgNzcuMjU0IDQwMi43NDYgODggNDE2IDg4Wk0zMiA0MjRDMTguNzQ2IDQyNCA4IDQzNC43NDQgOCA0NDhDOCA0NjEuMjU0IDE4Ljc0NiA0NzIgMzIgNDcyUzU2IDQ2MS4yNTQgNTYgNDQ4QzU2IDQzNC43NDQgNDUuMjU0IDQyNCAzMiA0MjRaTTMyIDMyOEMxOC43NDYgMzI4IDggMzM4Ljc0NCA4IDM1MkM4IDM2NS4yNTQgMTguNzQ2IDM3NiAzMiAzNzZTNTYgMzY1LjI1NCA1NiAzNTJDNTYgMzM4Ljc0NCA0NS4yNTQgMzI4IDMyIDMyOFpNMzIgMTM2QzE4Ljc0NiAxMzYgOCAxNDYuNzQ0IDggMTYwQzggMTczLjI1NCAxOC43NDYgMTg0IDMyIDE4NFM1NiAxNzMuMjU0IDU2IDE2MEM1NiAxNDYuNzQ0IDQ1LjI1NCAxMzYgMzIgMTM2Wk0zMiAyMzJDMTguNzQ2IDIzMiA4IDI0Mi43NDQgOCAyNTZDOCAyNjkuMjU0IDE4Ljc0NiAyODAgMzIgMjgwUzU2IDI2OS4yNTQgNTYgMjU2QzU2IDI0Mi43NDQgNDUuMjU0IDIzMiAzMiAyMzJaTTIyNCA0MjRDMjEwLjc0NiA0MjQgMjAwIDQzNC43NDQgMjAwIDQ0OEMyMDAgNDYxLjI1NCAyMTAuNzQ2IDQ3MiAyMjQgNDcyUzI0OCA0NjEuMjU0IDI0OCA0NDhDMjQ4IDQzNC43NDQgMjM3LjI1NCA0MjQgMjI0IDQyNFpNNDE2IDMyOEM0MDIuNzQ2IDMyOCAzOTIgMzM4Ljc0NCAzOTIgMzUyQzM5MiAzNjUuMjU0IDQwMi43NDYgMzc2IDQxNiAzNzZTNDQwIDM2NS4yNTQgNDQwIDM1MkM0NDAgMzM4Ljc0NCA0MjkuMjU0IDMyOCA0MTYgMzI4Wk00MTYgNDI0QzQwMi43NDYgNDI0IDM5MiA0MzQuNzQ0IDM5MiA0NDhDMzkyIDQ2MS4yNTQgNDAyLjc0NiA0NzIgNDE2IDQ3MlM0NDAgNDYxLjI1NCA0NDAgNDQ4QzQ0MCA0MzQuNzQ0IDQyOS4yNTQgNDI0IDQxNiA0MjRaTTQxNiAyMzJDNDAyLjc0NiAyMzIgMzkyIDI0Mi43NDQgMzkyIDI1NkMzOTIgMjY5LjI1NCA0MDIuNzQ2IDI4MCA0MTYgMjgwUzQ0MCAyNjkuMjU0IDQ0MCAyNTZDNDQwIDI0Mi43NDQgNDI5LjI1NCAyMzIgNDE2IDIzMlpNMzIwIDQwQzMwNi43NDYgNDAgMjk2IDUwLjc0NCAyOTYgNjRDMjk2IDc3LjI1NCAzMDYuNzQ2IDg4IDMyMCA4OFMzNDQgNzcuMjU0IDM0NCA2NEMzNDQgNTAuNzQ0IDMzMy4yNTQgNDAgMzIwIDQwWk0yMjQgMjMyQzIxMC43NDYgMjMyIDIwMCAyNDIuNzQ0IDIwMCAyNTZDMjAwIDI2OS4yNTQgMjEwLjc0NiAyODAgMjI0IDI4MFMyNDggMjY5LjI1NCAyNDggMjU2QzI0OCAyNDIuNzQ0IDIzNy4yNTQgMjMyIDIyNCAyMzJaTTQxNiAxMzZDNDAyLjc0NiAxMzYgMzkyIDE0Ni43NDQgMzkyIDE2MEMzOTIgMTczLjI1NCA0MDIuNzQ2IDE4NCA0MTYgMTg0UzQ0MCAxNzMuMjU0IDQ0MCAxNjBDNDQwIDE0Ni43NDQgNDI5LjI1NCAxMzYgNDE2IDEzNlpNMjI0IDQwQzIxMC43NDYgNDAgMjAwIDUwLjc0NCAyMDAgNjRDMjAwIDc3LjI1NCAyMTAuNzQ2IDg4IDIyNCA4OFMyNDggNzcuMjU0IDI0OCA2NEMyNDggNTAuNzQ0IDIzNy4yNTQgNDAgMjI0IDQwWk0zMjAgMjMyQzMwNi43NDYgMjMyIDI5NiAyNDIuNzQ0IDI5NiAyNTZDMjk2IDI2OS4yNTQgMzA2Ljc0NiAyODAgMzIwIDI4MFMzNDQgMjY5LjI1NCAzNDQgMjU2QzM0NCAyNDIuNzQ0IDMzMy4yNTQgMjMyIDMyMCAyMzJaTTIyNCAxMzZDMjEwLjc0NiAxMzYgMjAwIDE0Ni43NDQgMjAwIDE2MEMyMDAgMTczLjI1NCAyMTAuNzQ2IDE4NCAyMjQgMTg0UzI0OCAxNzMuMjU0IDI0OCAxNjBDMjQ4IDE0Ni43NDQgMjM3LjI1NCAxMzYgMjI0IDEzNlpNMzIwIDQyNEMzMDYuNzQ2IDQyNCAyOTYgNDM0Ljc0NCAyOTYgNDQ4QzI5NiA0NjEuMjU0IDMwNi43NDYgNDcyIDMyMCA0NzJTMzQ0IDQ2MS4yNTQgMzQ0IDQ0OEMzNDQgNDM0Ljc0NCAzMzMuMjU0IDQyNCAzMjAgNDI0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
const BorderNone: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 232C114.746 232 104 242.744 104 256C104 269.254 114.746 280 128 280S152 269.254 152 256C152 242.744 141.254 232 128 232ZM32 40C18.746 40 8 50.744 8 64C8 77.254 18.746 88 32 88S56 77.254 56 64C56 50.744 45.254 40 32 40ZM128 424C114.746 424 104 434.744 104 448C104 461.254 114.746 472 128 472S152 461.254 152 448C152 434.744 141.254 424 128 424ZM128 40C114.746 40 104 50.744 104 64C104 77.254 114.746 88 128 88S152 77.254 152 64C152 50.744 141.254 40 128 40ZM224 328C210.746 328 200 338.744 200 352C200 365.254 210.746 376 224 376S248 365.254 248 352C248 338.744 237.254 328 224 328ZM416 88C429.254 88 440 77.254 440 64C440 50.744 429.254 40 416 40S392 50.744 392 64C392 77.254 402.746 88 416 88ZM32 424C18.746 424 8 434.744 8 448C8 461.254 18.746 472 32 472S56 461.254 56 448C56 434.744 45.254 424 32 424ZM32 328C18.746 328 8 338.744 8 352C8 365.254 18.746 376 32 376S56 365.254 56 352C56 338.744 45.254 328 32 328ZM32 136C18.746 136 8 146.744 8 160C8 173.254 18.746 184 32 184S56 173.254 56 160C56 146.744 45.254 136 32 136ZM32 232C18.746 232 8 242.744 8 256C8 269.254 18.746 280 32 280S56 269.254 56 256C56 242.744 45.254 232 32 232ZM224 424C210.746 424 200 434.744 200 448C200 461.254 210.746 472 224 472S248 461.254 248 448C248 434.744 237.254 424 224 424ZM416 328C402.746 328 392 338.744 392 352C392 365.254 402.746 376 416 376S440 365.254 440 352C440 338.744 429.254 328 416 328ZM416 424C402.746 424 392 434.744 392 448C392 461.254 402.746 472 416 472S440 461.254 440 448C440 434.744 429.254 424 416 424ZM416 232C402.746 232 392 242.744 392 256C392 269.254 402.746 280 416 280S440 269.254 440 256C440 242.744 429.254 232 416 232ZM320 40C306.746 40 296 50.744 296 64C296 77.254 306.746 88 320 88S344 77.254 344 64C344 50.744 333.254 40 320 40ZM224 232C210.746 232 200 242.744 200 256C200 269.254 210.746 280 224 280S248 269.254 248 256C248 242.744 237.254 232 224 232ZM416 136C402.746 136 392 146.744 392 160C392 173.254 402.746 184 416 184S440 173.254 440 160C440 146.744 429.254 136 416 136ZM224 40C210.746 40 200 50.744 200 64C200 77.254 210.746 88 224 88S248 77.254 248 64C248 50.744 237.254 40 224 40ZM320 232C306.746 232 296 242.744 296 256C296 269.254 306.746 280 320 280S344 269.254 344 256C344 242.744 333.254 232 320 232ZM224 136C210.746 136 200 146.744 200 160C200 173.254 210.746 184 224 184S248 173.254 248 160C248 146.744 237.254 136 224 136ZM320 424C306.746 424 296 434.744 296 448C296 461.254 306.746 472 320 472S344 461.254 344 448C344 434.744 333.254 424 320 424Z" />
    </Icon>
);

export default BorderNone;