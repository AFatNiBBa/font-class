
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `question` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/question?s=duotone question}
 * @preview ![question](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE0NCAzNzZDMTEzLjA3MiAzNzYgODggNDAxLjA3MiA4OCA0MzJTMTEzLjA3MiA0ODggMTQ0IDQ4OFMyMDAgNDYyLjkyOCAyMDAgNDMyUzE3NC45MjggMzc2IDE0NCAzNzZaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTIwMS4zNDQgMzJIMTEyQzUwLjI1IDMyIDAgODIuMjUgMCAxNDRDMCAxNzAuNTE2IDIxLjUgMTkyIDQ4IDE5MlM5NiAxNzAuNTE2IDk2IDE0NEM5NiAxMzUuMTcyIDEwMy4xODggMTI4IDExMiAxMjhIMjAxLjM0NEMyMTMuODQ0IDEyOCAyMjQgMTM4LjE3MiAyMjQgMTUwLjY3MkMyMjQgMTU4Ljg0NCAyMTkuNTYyIDE2Ni40MjIgMjEyLjQzOCAxNzAuNDM4TDEyMC40NjkgMjIyLjE3MkMxMDUuMzQ0IDIzMC42NzIgOTYgMjQ2LjY1NiA5NiAyNjRWMjg4Qzk2IDMxNC41MTYgMTE3LjUgMzM2IDE0NCAzMzZDMTY5LjA5NCAzMzYgMTg5LjcxOSAzMTYuNzM0IDE5MS44MTIgMjkyLjE3MkwyNTkuNSAyNTQuMDk0QzI5Ni44MTIgMjMzLjEwOSAzMjAgMTkzLjQ4NCAzMjAgMTUwLjY3MkMzMjAgODUuMjM0IDI2Ni43ODEgMzIgMjAxLjM0NCAzMloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Question(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path opacity={.4} d="M144 376C113.072 376 88 401.072 88 432S113.072 488 144 488S200 462.928 200 432S174.928 376 144 376Z" />
            <path d="M201.344 32H112C50.25 32 0 82.25 0 144C0 170.516 21.5 192 48 192S96 170.516 96 144C96 135.172 103.188 128 112 128H201.344C213.844 128 224 138.172 224 150.672C224 158.844 219.562 166.422 212.438 170.438L120.469 222.172C105.344 230.672 96 246.656 96 264V288C96 314.516 117.5 336 144 336C169.094 336 189.719 316.734 191.812 292.172L259.5 254.094C296.812 233.109 320 193.484 320 150.672C320 85.234 266.781 32 201.344 32Z" />
        </Icon>
    </>
}