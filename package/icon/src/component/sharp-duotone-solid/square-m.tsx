
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-m` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-m?s=sharp-duotone-solid square-m}
 * @preview ![square-m](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNDgwbDQ0OCAwIDAtNDQ4TDAgMzJ6bTk2IDk2bDM2LjMgMCA3LjIgOS45TDIyNCAyNTVsODQuNS0xMTcuMSA3LjItOS45IDM2LjMgMCAwIDI0IDAgMjA4IDAgMjQtNDggMCAwLTI0IDAtMTMzLjgtNjAuNSA4My44TDIyNCAzMzdsLTE5LjUtMjYuOUwxNDQgMjI2LjIgMTQ0IDM2MGwwIDI0LTQ4IDAgMC0yNCAwLTIwOCAwLTI0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNOTYgMTI4bDAgMjQgMCAyMDggMCAyNCA0OCAwIDAtMjQgMC0xMzMuOCA2MC41IDgzLjhMMjI0IDMzN2wxOS41LTI2LjlMMzA0IDIyNi4yIDMwNCAzNjBsMCAyNCA0OCAwIDAtMjQgMC0yMDggMC0yNC0zNi4zIDAtNy4yIDkuOUwyMjQgMjU1IDEzOS41IDEzNy45bC03LjItOS45TDk2IDEyOHoiLz48L3N2Zz4=|width=32|height=32)
 */
const SquareM: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zm96 96l36.3 0 7.2 9.9L224 255l84.5-117.1 7.2-9.9 36.3 0 0 24 0 208 0 24-48 0 0-24 0-133.8-60.5 83.8L224 337l-19.5-26.9L144 226.2 144 360l0 24-48 0 0-24 0-208 0-24z" />
            <path d="M96 128l0 24 0 208 0 24 48 0 0-24 0-133.8 60.5 83.8L224 337l19.5-26.9L304 226.2 304 360l0 24 48 0 0-24 0-208 0-24-36.3 0-7.2 9.9L224 255 139.5 137.9l-7.2-9.9L96 128z" />
    </Icon>
);

export default SquareM;