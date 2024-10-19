
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `utility-pole` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/utility-pole?s=thin utility-pole}
 * @preview ![utility-pole](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDQgMzJDNDk5LjU5NCAzMiA0OTYgMzUuNTc4IDQ5NiA0MFY4MEg0NDhWNDBDNDQ4IDM1LjU3OCA0NDQuNDA2IDMyIDQ0MCAzMlM0MzIgMzUuNTc4IDQzMiA0MFY4MEgyODhWMjRDMjg4IDEwLjc2NiAyNzcuMjE5IDAgMjY0IDBIMjQ4QzIzNC43ODEgMCAyMjQgMTAuNzY2IDIyNCAyNFY4MEg4MFY0MEM4MCAzNS41NzggNzYuNDA2IDMyIDcyIDMyUzY0IDM1LjU3OCA2NCA0MFY4MEgxNlY0MEMxNiAzNS41NzggMTIuNDA2IDMyIDggMzJTMCAzNS41NzggMCA0MFYxMTJDMCAxMjkuNjcyIDE0LjMyNiAxNDQgMzIgMTQ0SDk3LjU3OEwyMjQgMjI4LjI4MVY1MDRDMjI0IDUwOC40MjIgMjI3LjU5NCA1MTIgMjMyIDUxMlMyNDAgNTA4LjQyMiAyNDAgNTA0VjE0NEgyNzJWNTA0QzI3MiA1MDguNDIyIDI3NS41OTQgNTEyIDI4MCA1MTJTMjg4IDUwOC40MjIgMjg4IDUwNFYyMjguMjgxTDQxNC40MjIgMTQ0SDQ4MEM0OTcuNjc0IDE0NCA1MTIgMTI5LjY3MiA1MTIgMTEyVjQwQzUxMiAzNS41NzggNTA4LjQwNiAzMiA1MDQgMzJaTTI0MCAyNEMyNDAgMTkuNTk0IDI0My41OTQgMTYgMjQ4IDE2SDI2NEMyNjguNDA2IDE2IDI3MiAxOS41OTQgMjcyIDI0VjgwSDI0MFYyNFpNMjI0IDIwOS4wNTFMMTI2LjQyMiAxNDRIMjI0VjIwOS4wNTFaTTI4OCAyMDkuMDUxVjE0NEgzODUuNTc4TDI4OCAyMDkuMDUxWk00OTYgMTEyQzQ5NiAxMjAuODIyIDQ4OC44MjIgMTI4IDQ4MCAxMjhIMzJDMjMuMTc4IDEyOCAxNiAxMjAuODIyIDE2IDExMlY5Nkg0OTZWMTEyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function UtilityPole(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M504 32C499.594 32 496 35.578 496 40V80H448V40C448 35.578 444.406 32 440 32S432 35.578 432 40V80H288V24C288 10.766 277.219 0 264 0H248C234.781 0 224 10.766 224 24V80H80V40C80 35.578 76.406 32 72 32S64 35.578 64 40V80H16V40C16 35.578 12.406 32 8 32S0 35.578 0 40V112C0 129.672 14.326 144 32 144H97.578L224 228.281V504C224 508.422 227.594 512 232 512S240 508.422 240 504V144H272V504C272 508.422 275.594 512 280 512S288 508.422 288 504V228.281L414.422 144H480C497.674 144 512 129.672 512 112V40C512 35.578 508.406 32 504 32ZM240 24C240 19.594 243.594 16 248 16H264C268.406 16 272 19.594 272 24V80H240V24ZM224 209.051L126.422 144H224V209.051ZM288 209.051V144H385.578L288 209.051ZM496 112C496 120.822 488.822 128 480 128H32C23.178 128 16 120.822 16 112V96H496V112Z" />
        </Icon>
    </>
}