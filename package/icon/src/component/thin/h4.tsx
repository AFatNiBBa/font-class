
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `h4` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/h4?s=thin h4}
 * @preview ![h4](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMTEuNzk0IDY0QzMwNy4zNzYgNjQgMzAzLjggNjcuNTk0IDMwMy44IDcyVjI0MEgxNS45ODlWNzJDMTUuOTg5IDY3LjU5NCAxMi40MTQgNjQgNy45OTUgNjRTMCA2Ny41OTQgMCA3MlY0NDBDMCA0NDQuNDA2IDMuNTc2IDQ0OCA3Ljk5NSA0NDhTMTUuOTg5IDQ0NC40MDYgMTUuOTg5IDQ0MFYyNTZIMzAzLjhWNDQwQzMwMy44IDQ0NC40MDYgMzA3LjM3NiA0NDggMzExLjc5NCA0NDhDMzE2LjIxMyA0NDggMzE5Ljc4OSA0NDQuNDA2IDMxOS43ODkgNDQwVjcyQzMxOS43ODkgNjcuNTk0IDMxNi4yMTMgNjQgMzExLjc5NCA2NFpNNjMyLjAwNSA2NEM2MjcuNTg2IDY0IDYyNC4wMTEgNjcuNTk0IDYyNC4wMTEgNzJWMjcySDQwMS40ODVMNDQwLjk1OSA3My41NjJDNDQxLjgxOCA2OS4yMTkgNDM5LjAwNyA2NS4wMzEgNDM0LjY4MiA2NC4xNTZDNDMwLjQzNSA2My40MzggNDI2LjE0MSA2Ni4wOTQgNDI1LjI4MiA3MC40MzhMMzgzLjkwMyAyNzguNDM4QzM4My40MzUgMjgwLjc4MSAzODQuMDQ0IDI4My4yMTkgMzg1LjU1OCAyODUuMDYyQzM4Ny4wNzMgMjg2LjkzOCAzODkuMzUzIDI4OCAzOTEuNzQyIDI4OEg2MjQuMDExVjQ0MEM2MjQuMDExIDQ0NC40MDYgNjI3LjU4NiA0NDggNjMyLjAwNSA0NDhDNjM2LjQyNCA0NDggNjQwIDQ0NC40MDYgNjQwIDQ0MFY3MkM2NDAgNjcuNTk0IDYzNi40MjQgNjQgNjMyLjAwNSA2NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function H4(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M311.794 64C307.376 64 303.8 67.594 303.8 72V240H15.989V72C15.989 67.594 12.414 64 7.995 64S0 67.594 0 72V440C0 444.406 3.576 448 7.995 448S15.989 444.406 15.989 440V256H303.8V440C303.8 444.406 307.376 448 311.794 448C316.213 448 319.789 444.406 319.789 440V72C319.789 67.594 316.213 64 311.794 64ZM632.005 64C627.586 64 624.011 67.594 624.011 72V272H401.485L440.959 73.562C441.818 69.219 439.007 65.031 434.682 64.156C430.435 63.438 426.141 66.094 425.282 70.438L383.903 278.438C383.435 280.781 384.044 283.219 385.558 285.062C387.073 286.938 389.353 288 391.742 288H624.011V440C624.011 444.406 627.586 448 632.005 448C636.424 448 640 444.406 640 440V72C640 67.594 636.424 64 632.005 64Z" />
        </Icon>
    </>
}