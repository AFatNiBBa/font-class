
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-arrow-down` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-arrow-down?s=solid calendar-arrow-down}
 * @preview ![calendar-arrow-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMTEyVjE2MEgwVjExMkMwIDg1LjQ5IDIxLjQ5IDY0IDQ4IDY0SDk2VjMyQzk2IDE0LjQgMTEwLjQgMCAxMjggMEgxMjhDMTQ1LjYgMCAxNjAgMTQuNCAxNjAgMzJWNjRIMjg4VjMyQzI4OCAxNC40IDMwMi40IDAgMzIwIDBIMzIwQzMzNy42IDAgMzUyIDE0LjQgMzUyIDMyVjY0SDQwMEM0MjYuNTEgNjQgNDQ4IDg1LjQ5IDQ0OCAxMTJaTTAgMTkySDQ0OFY0NjRDNDQ4IDQ5MC41IDQyNi41IDUxMiA0MDAgNTEySDQ4QzIxLjUgNTEyIDAgNDkwLjUgMCA0NjRWMTkyWk0zMjAuOTY5IDMyNy4wMzFDMzExLjU5NCAzMTcuNjU2IDI5Ni40MDYgMzE3LjY1NiAyODcuMDMxIDMyNy4wMzFMMjQ4IDM2Ni4wNjJWMjY0QzI0OCAyNTAuNzUgMjM3LjI1IDI0MCAyMjQgMjQwUzIwMCAyNTAuNzUgMjAwIDI2NFYzNjYuMDYyTDE2MC45NjkgMzI3LjAzMUMxNTYuMjgxIDMyMi4zNDQgMTUwLjE1NiAzMjAgMTQ0IDMyMFMxMzEuNzE5IDMyMi4zNDQgMTI3LjAzMSAzMjcuMDMxQzExNy42NTYgMzM2LjQwNiAxMTcuNjU2IDM1MS41OTQgMTI3LjAzMSAzNjAuOTY5TDIwNy4wMzEgNDQwLjk2OUMyMTYuNDA2IDQ1MC4zNDQgMjMxLjU5NCA0NTAuMzQ0IDI0MC45NjkgNDQwLjk2OUwzMjAuOTY5IDM2MC45NjlDMzMwLjM0NCAzNTEuNTk0IDMzMC4zNDQgMzM2LjQwNiAzMjAuOTY5IDMyNy4wMzFaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CalendarArrowDown(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M448 112V160H0V112C0 85.49 21.49 64 48 64H96V32C96 14.4 110.4 0 128 0H128C145.6 0 160 14.4 160 32V64H288V32C288 14.4 302.4 0 320 0H320C337.6 0 352 14.4 352 32V64H400C426.51 64 448 85.49 448 112ZM0 192H448V464C448 490.5 426.5 512 400 512H48C21.5 512 0 490.5 0 464V192ZM320.969 327.031C311.594 317.656 296.406 317.656 287.031 327.031L248 366.062V264C248 250.75 237.25 240 224 240S200 250.75 200 264V366.062L160.969 327.031C156.281 322.344 150.156 320 144 320S131.719 322.344 127.031 327.031C117.656 336.406 117.656 351.594 127.031 360.969L207.031 440.969C216.406 450.344 231.594 450.344 240.969 440.969L320.969 360.969C330.344 351.594 330.344 336.406 320.969 327.031Z" />
        </Icon>
    </>
}