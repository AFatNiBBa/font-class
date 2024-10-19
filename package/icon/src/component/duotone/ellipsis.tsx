
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `ellipsis` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/ellipsis?s=duotone ellipsis}
 * @preview ![ellipsis](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAxOTJDMjIwLjYxMSAxOTIgMTkyIDIyMC42MjUgMTkyIDI1NlMyMjAuNjExIDMyMCAyNTYgMzIwUzMyMCAyOTEuMzc1IDMyMCAyNTZTMjkxLjM4OSAxOTIgMjU2IDE5MloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNjQgMTkyQzI4LjYxMSAxOTIgMCAyMjAuNjI1IDAgMjU2UzI4LjYxMSAzMjAgNjQgMzIwUzEyOCAyOTEuMzc1IDEyOCAyNTZTOTkuMzg5IDE5MiA2NCAxOTJaTTQ0OCAxOTJDNDEyLjYxMSAxOTIgMzg0IDIyMC42MjUgMzg0IDI1NlM0MTIuNjExIDMyMCA0NDggMzIwUzUxMiAyOTEuMzc1IDUxMiAyNTZTNDgzLjM4OSAxOTIgNDQ4IDE5MloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Ellipsis(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M256 192C220.611 192 192 220.625 192 256S220.611 320 256 320S320 291.375 320 256S291.389 192 256 192Z" />
            <path d="M64 192C28.611 192 0 220.625 0 256S28.611 320 64 320S128 291.375 128 256S99.389 192 64 192ZM448 192C412.611 192 384 220.625 384 256S412.611 320 448 320S512 291.375 512 256S483.389 192 448 192Z" />
        </Icon>
    </>
}