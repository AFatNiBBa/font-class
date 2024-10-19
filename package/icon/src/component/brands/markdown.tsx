
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `markdown` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/markdown?s=brands markdown}
 * @preview ![markdown](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01OTMuOCA1OS4xSDQ2LjJDMjAuNyA1OS4xIDAgNzkuOCAwIDEwNS4ydjMwMS41YzAgMjUuNSAyMC43IDQ2LjIgNDYuMiA0Ni4yaDU0Ny43YzI1LjUgMCA0Ni4yLTIwLjcgNDYuMS00Ni4xVjEwNS4yYzAtMjUuNC0yMC43LTQ2LjEtNDYuMi00Ni4xek0zMzguNSAzNjAuNkgyNzd2LTEyMGwtNjEuNSA3Ni45LTYxLjUtNzYuOXYxMjBIOTIuM1YxNTEuNGg2MS41bDYxLjUgNzYuOSA2MS41LTc2LjloNjEuNXYyMDkuMnptMTM1LjMgMy4xTDM4MS41IDI1Nkg0NDNWMTUxLjRoNjEuNVYyNTZINTY2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Markdown(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M593.8 59.1H46.2C20.7 59.1 0 79.8 0 105.2v301.5c0 25.5 20.7 46.2 46.2 46.2h547.7c25.5 0 46.2-20.7 46.1-46.1V105.2c0-25.4-20.7-46.1-46.2-46.1zM338.5 360.6H277v-120l-61.5 76.9-61.5-76.9v120H92.3V151.4h61.5l61.5 76.9 61.5-76.9h61.5v209.2zm135.3 3.1L381.5 256H443V151.4h61.5V256H566z" />
        </Icon>
    </>
}