
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `glass-empty` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/glass-empty?s=thin glass-empty}
 * @preview ![glass-empty](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNDQuNDExIDQwLjg1OUMzMzkuMDUxIDM1LjE3MiAzMzEuNzI3IDMyIDMyMy45NjMgMzJINjAuMDM4QzUyLjI3NCAzMiA0NC45NSAzNS4xNzIgMzkuNTkgNDAuODU5QzM0LjM0IDQ2LjQzOCAzMS42MDggNTMuOTg0IDMyLjA0NiA2MS43NUw2MC4wMzggNDUzLjc1QzYxLjAyMiA0NjguNTE2IDczLjI2OCA0ODAgODguMDMgNDgwSDI5NS45NzFDMzEwLjczMyA0ODAgMzIyLjk3OSA0NjguNTE2IDMyMy45NjMgNDUzLjc1TDM1MS45NTYgNjEuNzVDMzUyLjM5MyA1My45ODQgMzQ5LjY2MSA0Ni40MzggMzQ0LjQxMSA0MC44NTlaTTMwNy45OTkgNDUyLjY4OEMzMDcuNTc3IDQ1OS4wMzEgMzAyLjI5NCA0NjQgMjk1Ljk3MSA0NjRIODguMDNDODEuNzA4IDQ2NCA3Ni40MjQgNDU5LjAzMSA3NS45OTcgNDUyLjYwOUw0OC4wMiA2MC44NTJDNDcuODMxIDU3LjQ5MiA0OS4wMDQgNTQuMjAzIDUxLjIzNSA1MS44MzJDNTMuNTYzIDQ5LjM1OSA1Ni42OSA0OCA2MC4wMzggNDhIMzIzLjk2M0MzMjcuMzExIDQ4IDMzMC40MzggNDkuMzU5IDMzMi43NiA1MS44MjRDMzM0Ljk5NyA1NC4yMDMgMzM2LjE3MSA1Ny40OTIgMzM1Ljk5NyA2MC42MDlMMzA3Ljk5OSA0NTIuNjg4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function GlassEmpty(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M344.411 40.859C339.051 35.172 331.727 32 323.963 32H60.038C52.274 32 44.95 35.172 39.59 40.859C34.34 46.438 31.608 53.984 32.046 61.75L60.038 453.75C61.022 468.516 73.268 480 88.03 480H295.971C310.733 480 322.979 468.516 323.963 453.75L351.956 61.75C352.393 53.984 349.661 46.438 344.411 40.859ZM307.999 452.688C307.577 459.031 302.294 464 295.971 464H88.03C81.708 464 76.424 459.031 75.997 452.609L48.02 60.852C47.831 57.492 49.004 54.203 51.235 51.832C53.563 49.359 56.69 48 60.038 48H323.963C327.311 48 330.438 49.359 332.76 51.824C334.997 54.203 336.171 57.492 335.997 60.609L307.999 452.688Z" />
        </Icon>
    </>
}