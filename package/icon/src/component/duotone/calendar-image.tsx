
import { Icon, generic } from "../../index";

/**
 * A component that renders the `calendar-image` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-image?s=duotone calendar-image}
 * @preview ![calendar-image](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTAgMTkyVjQ2NEMwIDQ5MC41IDIxLjUgNTEyIDQ4IDUxMkg0MDBDNDI2LjUgNTEyIDQ0OCA0OTAuNSA0NDggNDY0VjE5MkgwWk0xMjggMjU2QzE0NS42MjUgMjU2IDE2MCAyNzAuMzc1IDE2MCAyODhTMTQ1LjYyNSAzMjAgMTI4IDMyMFM5NiAzMDUuNjI1IDk2IDI4OFMxMTAuMzc1IDI1NiAxMjggMjU2Wk0zNTAuMTA3IDQzOS41NTFDMzQ3LjMyMiA0NDQuNzU0IDM0MS45IDQ0OCAzMzYgNDQ4SDExMkMxMDUuOTc5IDQ0OCAxMDAuNDY3IDQ0NC42MjEgOTcuNzM4IDQzOS4yNUM5NS4wMDggNDMzLjg4MyA5NS41MjMgNDI3LjQzOCA5OS4wNzIgNDIyLjU3NEwxNDUuNzM4IDM1OC41NzRDMTQ4Ljc1IDM1NC40NDEgMTUzLjU1NSAzNTIgMTU4LjY2NiAzNTJTMTY4LjU4MiAzNTQuNDQxIDE3MS41OTQgMzU4LjU3NEwxODMuODUgMzc1LjM4M0wyMzcuMzU0IDI5NS4xMjVDMjQwLjMyIDI5MC42NzIgMjQ1LjMxNiAyODggMjUwLjY2NiAyODhTMjYxLjAxMiAyOTAuNjcyIDI2My45NzkgMjk1LjEyNUwzNDkuMzEyIDQyMy4xMjVDMzUyLjU4NiA0MjguMDM1IDM1Mi44OTEgNDM0LjM0OCAzNTAuMTA3IDQzOS41NTFaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTQwMCA2NEgzNTJWMzJDMzUyIDE0LjQgMzM3LjYgMCAzMjAgMEgzMjBDMzAyLjQgMCAyODggMTQuNCAyODggMzJWNjRIMTYwVjMyQzE2MCAxNC40IDE0NS42IDAgMTI4IDBIMTI4QzExMC40IDAgOTYgMTQuNCA5NiAzMlY2NEg0OEMyMS40OSA2NCAwIDg1LjQ5IDAgMTEyVjE5Mkg0NDhWMTEyQzQ0OCA4NS40OSA0MjYuNTEgNjQgNDAwIDY0Wk0xODMuODUgMzc1LjM4M0wyMzcuMzU0IDI5NS4xMjVDMjQwLjMyIDI5MC42NzIgMjQ1LjMxNiAyODggMjUwLjY2NiAyODhTMjYxLjAxMiAyOTAuNjcyIDI2My45NzkgMjk1LjEyNUwzNDkuMzEyIDQyMy4xMjVDMzUyLjU4NiA0MjguMDM1IDM1Mi44OTEgNDM0LjM0OCAzNTAuMTA3IDQzOS41NTFDMzQ3LjMyMiA0NDQuNzU0IDM0MS45IDQ0OCAzMzYgNDQ4SDExMkMxMDUuOTc5IDQ0OCAxMDAuNDY3IDQ0NC42MjEgOTcuNzM4IDQzOS4yNUM5NS4wMDggNDMzLjg4MyA5NS41MjMgNDI3LjQzOCA5OS4wNzIgNDIyLjU3NEwxNDUuNzM4IDM1OC41NzRDMTQ4Ljc1IDM1NC40NDEgMTUzLjU1NSAzNTIgMTU4LjY2NiAzNTJTMTY4LjU4MiAzNTQuNDQxIDE3MS41OTQgMzU4LjU3NEwxODMuODUgMzc1LjM4M1oiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
const CalendarImage: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 192V464C0 490.5 21.5 512 48 512H400C426.5 512 448 490.5 448 464V192H0ZM128 256C145.625 256 160 270.375 160 288S145.625 320 128 320S96 305.625 96 288S110.375 256 128 256ZM350.107 439.551C347.322 444.754 341.9 448 336 448H112C105.979 448 100.467 444.621 97.738 439.25C95.008 433.883 95.523 427.438 99.072 422.574L145.738 358.574C148.75 354.441 153.555 352 158.666 352S168.582 354.441 171.594 358.574L183.85 375.383L237.354 295.125C240.32 290.672 245.316 288 250.666 288S261.012 290.672 263.979 295.125L349.312 423.125C352.586 428.035 352.891 434.348 350.107 439.551Z" />
            <path d="M400 64H352V32C352 14.4 337.6 0 320 0H320C302.4 0 288 14.4 288 32V64H160V32C160 14.4 145.6 0 128 0H128C110.4 0 96 14.4 96 32V64H48C21.49 64 0 85.49 0 112V192H448V112C448 85.49 426.51 64 400 64ZM183.85 375.383L237.354 295.125C240.32 290.672 245.316 288 250.666 288S261.012 290.672 263.979 295.125L349.312 423.125C352.586 428.035 352.891 434.348 350.107 439.551C347.322 444.754 341.9 448 336 448H112C105.979 448 100.467 444.621 97.738 439.25C95.008 433.883 95.523 427.438 99.072 422.574L145.738 358.574C148.75 354.441 153.555 352 158.666 352S168.582 354.441 171.594 358.574L183.85 375.383Z" />
    </Icon>
);

export default CalendarImage;