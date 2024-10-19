
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `hard-drive` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hard-drive?s=regular hard-drive}
 * @preview ![hard-drive](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMDQgMzQ0QzI5MC43NDYgMzQ0IDI4MCAzNTQuNzQ0IDI4MCAzNjhDMjgwIDM4MS4yNTQgMjkwLjc0NiAzOTIgMzA0IDM5MkMzMTcuMjU2IDM5MiAzMjggMzgxLjI1NCAzMjggMzY4QzMyOCAzNTQuNzQ0IDMxNy4yNTYgMzQ0IDMwNCAzNDRaTTQ0OCAzMkg2NEMyOC42NTQgMzIgMCA2MC42NTQgMCA5NlY0MTZDMCA0NTEuMzQ2IDI4LjY1NCA0ODAgNjQgNDgwSDQ0OEM0ODMuMzQ4IDQ4MCA1MTIgNDUxLjM0NiA1MTIgNDE2Vjk2QzUxMiA2MC42NTQgNDgzLjM0OCAzMiA0NDggMzJaTTQ2NCA0MTZDNDY0IDQyNC44MjIgNDU2LjgyMiA0MzIgNDQ4IDQzMkg2NEM1NS4xNzggNDMyIDQ4IDQyNC44MjIgNDggNDE2VjMyMEM0OCAzMTEuMTc4IDU1LjE3OCAzMDQgNjQgMzA0SDQ0OEM0NTYuODIyIDMwNCA0NjQgMzExLjE3OCA0NjQgMzIwVjQxNlpNNDY0IDI1OC4yNjRDNDU4Ljg1NyAyNTYuOTMyIDQ1My41NTkgMjU2IDQ0OCAyNTZINjRDNTguNDQxIDI1NiA1My4xNDMgMjU2LjkzMiA0OCAyNTguMjY0Vjk2QzQ4IDg3LjE3OCA1NS4xNzggODAgNjQgODBINDQ4QzQ1Ni44MjIgODAgNDY0IDg3LjE3OCA0NjQgOTZWMjU4LjI2NFpNNDAwIDM0NEMzODYuNzQ2IDM0NCAzNzYgMzU0Ljc0NCAzNzYgMzY4QzM3NiAzODEuMjU0IDM4Ni43NDYgMzkyIDQwMCAzOTJDNDEzLjI1NiAzOTIgNDI0IDM4MS4yNTQgNDI0IDM2OEM0MjQgMzU0Ljc0NCA0MTMuMjU2IDM0NCA0MDAgMzQ0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function HardDrive(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M304 344C290.746 344 280 354.744 280 368C280 381.254 290.746 392 304 392C317.256 392 328 381.254 328 368C328 354.744 317.256 344 304 344ZM448 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H448C483.348 480 512 451.346 512 416V96C512 60.654 483.348 32 448 32ZM464 416C464 424.822 456.822 432 448 432H64C55.178 432 48 424.822 48 416V320C48 311.178 55.178 304 64 304H448C456.822 304 464 311.178 464 320V416ZM464 258.264C458.857 256.932 453.559 256 448 256H64C58.441 256 53.143 256.932 48 258.264V96C48 87.178 55.178 80 64 80H448C456.822 80 464 87.178 464 96V258.264ZM400 344C386.746 344 376 354.744 376 368C376 381.254 386.746 392 400 392C413.256 392 424 381.254 424 368C424 354.744 413.256 344 400 344Z" />
        </Icon>
    </>
}