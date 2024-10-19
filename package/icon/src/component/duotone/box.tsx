
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `box` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/box?s=duotone box}
 * @preview ![box](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTU2LjM3NSA1My44NzVMMCAxNTguNzVDMC4zNzUgMTU5LjI1IDAuNSAxNTkuNSAwLjg3NSAxNjBIMjA3LjYyNVYzMkg4Ni43NUM3Mi44NzUgMzIgNjAuNzUgNDAuNzUgNTYuMzc1IDUzLjg3NVpNMzkwLjg3NSA1My44NzVDMzg2LjUgNDAuNzUgMzc0LjM3NSAzMiAzNjAuNSAzMkgyMzkuNjI1VjE2MEg0NDYuMzc1QzQ0Ni43NSAxNTkuNSA0NDYuODc1IDE1OS4yNSA0NDcuMjUgMTU4Ljc1TDM5MC44NzUgNTMuODc1WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0yNDAgMTYwVjMySDIwOFYxNjBIMFY0MzJDMCA0NTguNTEgMjEuNDkgNDgwIDQ4IDQ4MEg0MDBDNDI2LjUxIDQ4MCA0NDggNDU4LjUxIDQ0OCA0MzJWMTYwSDI0MFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Box(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M56.375 53.875L0 158.75C0.375 159.25 0.5 159.5 0.875 160H207.625V32H86.75C72.875 32 60.75 40.75 56.375 53.875ZM390.875 53.875C386.5 40.75 374.375 32 360.5 32H239.625V160H446.375C446.75 159.5 446.875 159.25 447.25 158.75L390.875 53.875Z" />
            <path d="M240 160V32H208V160H0V432C0 458.51 21.49 480 48 480H400C426.51 480 448 458.51 448 432V160H240Z" />
        </Icon>
    </>
}