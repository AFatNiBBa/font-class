
import { Icon } from "../../index";

/**
 * A component that renders the `border-right` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/border-right?s=light border-right}
 * @preview ![border-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMjggNDBDMTE0Ljc0NiA0MCAxMDQgNTAuNzQ0IDEwNCA2NEMxMDQgNzcuMjU0IDExNC43NDYgODggMTI4IDg4UzE1MiA3Ny4yNTQgMTUyIDY0QzE1MiA1MC43NDQgMTQxLjI1NCA0MCAxMjggNDBaTTMyIDEzNkMxOC43NDYgMTM2IDggMTQ2Ljc0NCA4IDE2MEM4IDE3My4yNTQgMTguNzQ2IDE4NCAzMiAxODRTNTYgMTczLjI1NCA1NiAxNjBDNTYgMTQ2Ljc0NCA0NS4yNTQgMTM2IDMyIDEzNlpNMTI4IDQyNEMxMTQuNzQ2IDQyNCAxMDQgNDM0Ljc0NCAxMDQgNDQ4QzEwNCA0NjEuMjU0IDExNC43NDYgNDcyIDEyOCA0NzJTMTUyIDQ2MS4yNTQgMTUyIDQ0OEMxNTIgNDM0Ljc0NCAxNDEuMjU0IDQyNCAxMjggNDI0Wk0xMjggMjMyQzExNC43NDYgMjMyIDEwNCAyNDIuNzQ0IDEwNCAyNTZDMTA0IDI2OS4yNTQgMTE0Ljc0NiAyODAgMTI4IDI4MFMxNTIgMjY5LjI1NCAxNTIgMjU2QzE1MiAyNDIuNzQ0IDE0MS4yNTQgMjMyIDEyOCAyMzJaTTMyIDQwQzE4Ljc0NiA0MCA4IDUwLjc0NCA4IDY0QzggNzcuMjU0IDE4Ljc0NiA4OCAzMiA4OFM1NiA3Ny4yNTQgNTYgNjRDNTYgNTAuNzQ0IDQ1LjI1NCA0MCAzMiA0MFpNMzIgNDI0QzE4Ljc0NiA0MjQgOCA0MzQuNzQ0IDggNDQ4QzggNDYxLjI1NCAxOC43NDYgNDcyIDMyIDQ3MlM1NiA0NjEuMjU0IDU2IDQ0OEM1NiA0MzQuNzQ0IDQ1LjI1NCA0MjQgMzIgNDI0Wk0zMiAzMjhDMTguNzQ2IDMyOCA4IDMzOC43NDQgOCAzNTJDOCAzNjUuMjU0IDE4Ljc0NiAzNzYgMzIgMzc2UzU2IDM2NS4yNTQgNTYgMzUyQzU2IDMzOC43NDQgNDUuMjU0IDMyOCAzMiAzMjhaTTMyIDIzMkMxOC43NDYgMjMyIDggMjQyLjc0NCA4IDI1NkM4IDI2OS4yNTQgMTguNzQ2IDI4MCAzMiAyODBTNTYgMjY5LjI1NCA1NiAyNTZDNTYgMjQyLjc0NCA0NS4yNTQgMjMyIDMyIDIzMlpNMjI0IDMyOEMyMTAuNzQ2IDMyOCAyMDAgMzM4Ljc0NCAyMDAgMzUyQzIwMCAzNjUuMjU0IDIxMC43NDYgMzc2IDIyNCAzNzZTMjQ4IDM2NS4yNTQgMjQ4IDM1MkMyNDggMzM4Ljc0NCAyMzcuMjU0IDMyOCAyMjQgMzI4Wk0yMjQgNDBDMjEwLjc0NiA0MCAyMDAgNTAuNzQ0IDIwMCA2NEMyMDAgNzcuMjU0IDIxMC43NDYgODggMjI0IDg4UzI0OCA3Ny4yNTQgMjQ4IDY0QzI0OCA1MC43NDQgMjM3LjI1NCA0MCAyMjQgNDBaTTMyMCAyMzJDMzA2Ljc0NiAyMzIgMjk2IDI0Mi43NDQgMjk2IDI1NkMyOTYgMjY5LjI1NCAzMDYuNzQ2IDI4MCAzMjAgMjgwUzM0NCAyNjkuMjU0IDM0NCAyNTZDMzQ0IDI0Mi43NDQgMzMzLjI1NCAyMzIgMzIwIDIzMlpNMjI0IDQyNEMyMTAuNzQ2IDQyNCAyMDAgNDM0Ljc0NCAyMDAgNDQ4QzIwMCA0NjEuMjU0IDIxMC43NDYgNDcyIDIyNCA0NzJTMjQ4IDQ2MS4yNTQgMjQ4IDQ0OEMyNDggNDM0Ljc0NCAyMzcuMjU0IDQyNCAyMjQgNDI0Wk0zMjAgNDBDMzA2Ljc0NiA0MCAyOTYgNTAuNzQ0IDI5NiA2NEMyOTYgNzcuMjU0IDMwNi43NDYgODggMzIwIDg4UzM0NCA3Ny4yNTQgMzQ0IDY0QzM0NCA1MC43NDQgMzMzLjI1NCA0MCAzMjAgNDBaTTMyMCA0MjRDMzA2Ljc0NiA0MjQgMjk2IDQzNC43NDQgMjk2IDQ0OEMyOTYgNDYxLjI1NCAzMDYuNzQ2IDQ3MiAzMjAgNDcyUzM0NCA0NjEuMjU0IDM0NCA0NDhDMzQ0IDQzNC43NDQgMzMzLjI1NCA0MjQgMzIwIDQyNFpNMjI0IDIzMkMyMTAuNzQ2IDIzMiAyMDAgMjQyLjc0NCAyMDAgMjU2QzIwMCAyNjkuMjU0IDIxMC43NDYgMjgwIDIyNCAyODBTMjQ4IDI2OS4yNTQgMjQ4IDI1NkMyNDggMjQyLjc0NCAyMzcuMjU0IDIzMiAyMjQgMjMyWk0yMjQgMTM2QzIxMC43NDYgMTM2IDIwMCAxNDYuNzQ0IDIwMCAxNjBDMjAwIDE3My4yNTQgMjEwLjc0NiAxODQgMjI0IDE4NFMyNDggMTczLjI1NCAyNDggMTYwQzI0OCAxNDYuNzQ0IDIzNy4yNTQgMTM2IDIyNCAxMzZaTTQzMiAzMkM0MjMuMTU2IDMyIDQxNiAzOS4xNTYgNDE2IDQ4VjQ2NEM0MTYgNDcyLjg0NCA0MjMuMTU2IDQ4MCA0MzIgNDgwUzQ0OCA0NzIuODQ0IDQ0OCA0NjRWNDhDNDQ4IDM5LjE1NiA0NDAuODQ0IDMyIDQzMiAzMloiLz48L3N2Zz4=|width=32|height=32)
 */
const BorderRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 40C114.746 40 104 50.744 104 64C104 77.254 114.746 88 128 88S152 77.254 152 64C152 50.744 141.254 40 128 40ZM32 136C18.746 136 8 146.744 8 160C8 173.254 18.746 184 32 184S56 173.254 56 160C56 146.744 45.254 136 32 136ZM128 424C114.746 424 104 434.744 104 448C104 461.254 114.746 472 128 472S152 461.254 152 448C152 434.744 141.254 424 128 424ZM128 232C114.746 232 104 242.744 104 256C104 269.254 114.746 280 128 280S152 269.254 152 256C152 242.744 141.254 232 128 232ZM32 40C18.746 40 8 50.744 8 64C8 77.254 18.746 88 32 88S56 77.254 56 64C56 50.744 45.254 40 32 40ZM32 424C18.746 424 8 434.744 8 448C8 461.254 18.746 472 32 472S56 461.254 56 448C56 434.744 45.254 424 32 424ZM32 328C18.746 328 8 338.744 8 352C8 365.254 18.746 376 32 376S56 365.254 56 352C56 338.744 45.254 328 32 328ZM32 232C18.746 232 8 242.744 8 256C8 269.254 18.746 280 32 280S56 269.254 56 256C56 242.744 45.254 232 32 232ZM224 328C210.746 328 200 338.744 200 352C200 365.254 210.746 376 224 376S248 365.254 248 352C248 338.744 237.254 328 224 328ZM224 40C210.746 40 200 50.744 200 64C200 77.254 210.746 88 224 88S248 77.254 248 64C248 50.744 237.254 40 224 40ZM320 232C306.746 232 296 242.744 296 256C296 269.254 306.746 280 320 280S344 269.254 344 256C344 242.744 333.254 232 320 232ZM224 424C210.746 424 200 434.744 200 448C200 461.254 210.746 472 224 472S248 461.254 248 448C248 434.744 237.254 424 224 424ZM320 40C306.746 40 296 50.744 296 64C296 77.254 306.746 88 320 88S344 77.254 344 64C344 50.744 333.254 40 320 40ZM320 424C306.746 424 296 434.744 296 448C296 461.254 306.746 472 320 472S344 461.254 344 448C344 434.744 333.254 424 320 424ZM224 232C210.746 232 200 242.744 200 256C200 269.254 210.746 280 224 280S248 269.254 248 256C248 242.744 237.254 232 224 232ZM224 136C210.746 136 200 146.744 200 160C200 173.254 210.746 184 224 184S248 173.254 248 160C248 146.744 237.254 136 224 136ZM432 32C423.156 32 416 39.156 416 48V464C416 472.844 423.156 480 432 480S448 472.844 448 464V48C448 39.156 440.844 32 432 32Z" />
    </Icon>
);

export default BorderRight;