
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `microphone-slash` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/microphone-slash?s=thin microphone-slash}
 * @preview ![microphone-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMzkuOTk5IDk2QzIzOS45OTkgNTEuODkxIDI3NS44ODYgMTYgMzE5Ljk5OSAxNlMzOTkuOTk5IDUxLjg5MSAzOTkuOTk5IDk2VjIyNy42MDVMNDE1Ljk5OSAyNDAuMzI0Vjk2QzQxNS45OTkgNDIuOTY5IDM3My4wMzEgMCAzMTkuOTk5IDBDMjY5LjU5OSAwIDIyOC43NDcgMzguOTQ1IDIyNC43NzMgODguMzJMMjM5Ljk5OSAxMDAuNDIyVjk2Wk00MzkuOTk5IDQ5NkgzMjcuOTk5VjQxNS4xOTFDMzQ4Ljc4OCA0MTQuMTQxIDM2OC41MTUgNDA5LjA2MiAzODYuNTAxIDQwMC44NDRMMzcyLjUzNiAzODkuNzQyQzM1Ni4yMTYgMzk2LjE4IDMzOC41NzkgNDAwIDMxOS45OTkgNDAwQzI0MC41OTMgNDAwIDE3NS45OTkgMzM1LjQwNiAxNzUuOTk5IDI1NlYyMzMuNTJMMTU5Ljk5OSAyMjAuODAxVjI1NkMxNTkuOTk5IDM0MS40NzcgMjI3LjU2MiA0MTAuOTIyIDMxMS45OTkgNDE1LjE5MVY0OTZIMTk5Ljk5OUMxOTUuNTkzIDQ5NiAxOTEuOTk5IDQ5OS41OTQgMTkxLjk5OSA1MDRTMTk1LjU5MyA1MTIgMTk5Ljk5OSA1MTJINDM5Ljk5OUM0NDQuNDA2IDUxMiA0NDcuOTk5IDUwOC40MDYgNDQ3Ljk5OSA1MDRTNDQ0LjQwNiA0OTYgNDM5Ljk5OSA0OTZaTTQ3OS45OTkgMjU2VjIwMEM0NzkuOTk5IDE5NS41OTQgNDc2LjQwNiAxOTIgNDcxLjk5OSAxOTJTNDYzLjk5OSAxOTUuNTk0IDQ2My45OTkgMjAwVjI1NkM0NjMuOTk5IDI2My4xMjUgNDYyLjkgMjY5Ljk1NyA0NjEuODk2IDI3Ni44MDVMNDc2LjU1MiAyODguNDU3QzQ3OC43MzYgMjc3Ljk2OSA0NzkuOTk5IDI2Ny4xNDEgNDc5Ljk5OSAyNTZaTTMyNC40ODYgMzUxLjU0N0wzMDIuMjIgMzMzLjg1MkMyNzguNTE5IDMyOC40MyAyNTkuMDAxIDMxMi40MzggMjQ4LjQ4NiAyOTEuMTM3TDIyNS43MTYgMjczLjAzOUMyMzMuNzc5IDMxNy45MDYgMjcyLjgwNCAzNTIgMzE5Ljk5OSAzNTJDMzIxLjUzNiAzNTIgMzIyLjk2NiAzNTEuNjIxIDMyNC40ODYgMzUxLjU0N1pNNjM2Ljk4MiA0OTcuNzM0TDEyLjk4OCAxLjczQzExLjUyNSAwLjU2NiA5Ljc3MSAwIDguMDI1IDBDNS42NzMgMCAzLjMzNSAxLjAzMSAxLjczOCAzLjAxMkMtMS4wMTIgNi40OCAtMC40MzQgMTEuNTEyIDMuMDE5IDE0LjI2Mkw2MjcuMDEzIDUxMC4yNjZDNjI4LjQ5NyA1MTEuNDM4IDYzMC4yNDcgNTEyIDYzMS45OTcgNTEyQzYzNC4zNDEgNTEyIDYzNi42ODUgNTEwLjk2OSA2MzguMjYzIDUwOC45ODRDNjQxLjAxMyA1MDUuNTE2IDY0MC40MzUgNTAwLjQ4NCA2MzYuOTgyIDQ5Ny43MzRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function MicrophoneSlash(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M239.999 96C239.999 51.891 275.886 16 319.999 16S399.999 51.891 399.999 96V227.605L415.999 240.324V96C415.999 42.969 373.031 0 319.999 0C269.599 0 228.747 38.945 224.773 88.32L239.999 100.422V96ZM439.999 496H327.999V415.191C348.788 414.141 368.515 409.062 386.501 400.844L372.536 389.742C356.216 396.18 338.579 400 319.999 400C240.593 400 175.999 335.406 175.999 256V233.52L159.999 220.801V256C159.999 341.477 227.562 410.922 311.999 415.191V496H199.999C195.593 496 191.999 499.594 191.999 504S195.593 512 199.999 512H439.999C444.406 512 447.999 508.406 447.999 504S444.406 496 439.999 496ZM479.999 256V200C479.999 195.594 476.406 192 471.999 192S463.999 195.594 463.999 200V256C463.999 263.125 462.9 269.957 461.896 276.805L476.552 288.457C478.736 277.969 479.999 267.141 479.999 256ZM324.486 351.547L302.22 333.852C278.519 328.43 259.001 312.438 248.486 291.137L225.716 273.039C233.779 317.906 272.804 352 319.999 352C321.536 352 322.966 351.621 324.486 351.547ZM636.982 497.734L12.988 1.73C11.525 0.566 9.771 0 8.025 0C5.673 0 3.335 1.031 1.738 3.012C-1.012 6.48 -0.434 11.512 3.019 14.262L627.013 510.266C628.497 511.438 630.247 512 631.997 512C634.341 512 636.685 510.969 638.263 508.984C641.013 505.516 640.435 500.484 636.982 497.734Z" />
        </Icon>
    </>
}