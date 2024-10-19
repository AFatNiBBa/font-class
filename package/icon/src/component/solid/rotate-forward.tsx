
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `rotate-forward` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/rotate-forward?s=solid rotate-forward}
 * @preview ![rotate-forward](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTYgNTkuMDM2VjIwNC45M0M0OTYgMjE1LjUxOSA0ODcuNDE2IDIyNC4xMDQgNDc2LjgyNiAyMjQuMTA0SDMzMS4wNzlDMzA3LjAxOSAyMjQuMTA0IDI5NC45NjYgMTk1LjAxOCAzMTEuOTc0IDE3OEwzNDUuNzI0IDE0NC4yM0MzMjAuMjU4IDEyMy43MTUgMjg5LjE4MiAxMTIgMjU2LjAxMSAxMTJDMjE3LjU0IDExMiAxODEuMzgyIDEyNi45NjkgMTU0LjE5NCAxNTQuMTg4QzEyNi45NzQgMTgxLjM3NSAxMTIuMDA0IDIxNy41MzEgMTEyLjAwNCAyNTZTMTI2Ljk3NCAzMzAuNjI1IDE1NC4xOTQgMzU3LjgxMkMxODEuMzgyIDM4NS4wMzEgMjE3LjU0IDQwMCAyNTYuMDExIDQwMEMyODIuNTk2IDQwMCAzMDguMDc2IDM5Mi44NTEgMzMwLjI1NSAzNzkuNDUzQzM0OC41ODUgMzY4LjM3OSAzNzIuMjc1IDM3Mi4yNTkgMzg3LjQxOSAzODcuNDAyTDM4Ny40MTkgMzg3LjQwMkM0MDkuMTI4IDQwOS4xMTEgNDA1LjY3MiA0NDYuMTUzIDM3OS4zNjMgNDYxLjk3N0MzNDIuNDgzIDQ4NC4xNTggMzAwLjE1MiA0OTYgMjU2LjAxMSA0OTZDMTkxLjkxNCA0OTYgMTMxLjYzIDQ3MS4wMzEgODYuMzE2IDQyNS42ODhDNDAuOTcgMzgwLjM3NSAxNiAzMjAuMDk0IDE2IDI1NlM0MC45NyAxMzEuNjI1IDg2LjMxNiA4Ni4zMTJDMTMxLjYzIDQwLjk2OSAxOTEuOTE0IDE2IDI1Ni4wMTEgMTZDMzE0Ljg1MyAxNiAzNzAuMzMyIDM3LjI2MiA0MTQuMTE3IDc1Ljc5NUw0NDkuOTMgMzkuOTYxQzQ2Ni45MjYgMjIuOTU0IDQ5NiAzNC45OTIgNDk2IDU5LjAzNloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function RotateForward(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M496 59.036V204.93C496 215.519 487.416 224.104 476.826 224.104H331.079C307.019 224.104 294.966 195.018 311.974 178L345.724 144.23C320.258 123.715 289.182 112 256.011 112C217.54 112 181.382 126.969 154.194 154.188C126.974 181.375 112.004 217.531 112.004 256S126.974 330.625 154.194 357.812C181.382 385.031 217.54 400 256.011 400C282.596 400 308.076 392.851 330.255 379.453C348.585 368.379 372.275 372.259 387.419 387.402L387.419 387.402C409.128 409.111 405.672 446.153 379.363 461.977C342.483 484.158 300.152 496 256.011 496C191.914 496 131.63 471.031 86.316 425.688C40.97 380.375 16 320.094 16 256S40.97 131.625 86.316 86.312C131.63 40.969 191.914 16 256.011 16C314.853 16 370.332 37.262 414.117 75.795L449.93 39.961C466.926 22.954 496 34.992 496 59.036Z" />
        </Icon>
    </>
}