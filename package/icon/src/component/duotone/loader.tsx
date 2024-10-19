
import { Icon, generic } from "../../index";

/**
 * A component that renders the `loader` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/loader?s=duotone loader}
 * @preview ![loader](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM2OS41MzEgMTc0Ljg1OUMzNzcuNzE5IDE3NC44NTkgMzg1LjkwNiAxNzEuNzM0IDM5Mi4xNTYgMTY1LjVMNDM3LjQzNyAxMjAuMjVDNDQ5LjkzNyAxMDcuNzUgNDQ5LjkzNyA4Ny40ODQgNDM3LjQzNyA3NC45ODRTNDA0LjY4NyA2Mi41IDM5Mi4xODcgNzQuOTY5TDM0Ni45MDYgMTIwLjIxOUMzMzQuNDA2IDEzMi43MTkgMzM0LjQwNiAxNTIuOTg0IDM0Ni45MDYgMTY1LjQ4NEMzNTMuMTU2IDE3MS43MzQgMzYxLjM0NCAxNzQuODU5IDM2OS41MzEgMTc0Ljg1OVpNMTIwLjY1NiAzNDYuNUw3NS4zNzUgMzkxLjc1QzYyLjg3NSA0MDQuMjUgNjIuODc1IDQyNC41MTYgNzUuMzc1IDQzNy4wMTZDODEuNjI1IDQ0My4yNjYgODkuODEzIDQ0Ni4zOTEgOTggNDQ2LjM5MVMxMTQuMzc1IDQ0My4yNjYgMTIwLjYyNSA0MzcuMDMxTDE2NS45MDYgMzkxLjc4MUMxNzguNDA2IDM3OS4yODEgMTc4LjQwNiAzNTkuMDE2IDE2NS45MDYgMzQ2LjUxNkMxNTMuNDA2IDMzNC4wMTYgMTMzLjE1NiAzMzQuMDMxIDEyMC42NTYgMzQ2LjVaTTM5Mi4xNTYgMzQ2LjVDMzc5LjY1NiAzMzQuMDMxIDM1OS40MDYgMzM0LjAxNiAzNDYuOTA2IDM0Ni41MTZDMzM0LjQwNiAzNTkuMDE2IDMzNC40MDYgMzc5LjI4MSAzNDYuOTA2IDM5MS43ODFMMzkyLjE4OCA0MzcuMDMxQzM5OC40MzggNDQzLjI2NiA0MDYuNjI1IDQ0Ni4zOTEgNDE0LjgxMyA0NDYuMzkxUzQzMS4xODggNDQzLjI2NiA0MzcuNDM3IDQzNy4wMTZDNDQ5LjkzNyA0MjQuNTE2IDQ0OS45MzcgNDA0LjI1IDQzNy40MzcgMzkxLjc1TDM5Mi4xNTYgMzQ2LjVaTTEyMC42MjUgNzQuOTY5QzEwOC4xMjUgNjIuNSA4Ny44NzUgNjIuNDg0IDc1LjM3NSA3NC45ODRTNjIuODc1IDEwNy43NSA3NS4zNzUgMTIwLjI1TDEyMC42NTYgMTY1LjVDMTI2LjkwNiAxNzEuNzM0IDEzNS4wOTQgMTc0Ljg1OSAxNDMuMjgxIDE3NC44NTlTMTU5LjY1NiAxNzEuNzM0IDE2NS45MDYgMTY1LjQ4NEMxNzguNDA2IDE1Mi45ODQgMTc4LjQwNiAxMzIuNzE5IDE2NS45MDYgMTIwLjIxOUwxMjAuNjI1IDc0Ljk2OVoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMjU2IDBDMjM4LjMxMiAwIDIyNCAxNC4zMjggMjI0IDMyVjk2QzIyNCAxMTMuNjcyIDIzOC4zMTIgMTI4IDI1NiAxMjhTMjg4IDExMy42NzIgMjg4IDk2VjMyQzI4OCAxNC4zMjggMjczLjY4OCAwIDI1NiAwWk0yNTYgMzg0QzIzOC4zMTIgMzg0IDIyNCAzOTguMzI4IDIyNCA0MTZWNDgwQzIyNCA0OTcuNjcyIDIzOC4zMTIgNTEyIDI1NiA1MTJTMjg4IDQ5Ny42NzIgMjg4IDQ4MFY0MTZDMjg4IDM5OC4zMjggMjczLjY4OCAzODQgMjU2IDM4NFpNNDgwIDIyNEg0MTZDMzk4LjMxMiAyMjQgMzg0IDIzOC4zMjggMzg0IDI1NlMzOTguMzEyIDI4OCA0MTYgMjg4SDQ4MEM0OTcuNjg4IDI4OCA1MTIgMjczLjY3MiA1MTIgMjU2UzQ5Ny42ODggMjI0IDQ4MCAyMjRaTTk2IDIyNEgzMkMxNC4zMTIgMjI0IDAgMjM4LjMyOCAwIDI1NlMxNC4zMTIgMjg4IDMyIDI4OEg5NkMxMTMuNjg4IDI4OCAxMjggMjczLjY3MiAxMjggMjU2UzExMy42ODggMjI0IDk2IDIyNFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
const Loader: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M369.531 174.859C377.719 174.859 385.906 171.734 392.156 165.5L437.437 120.25C449.937 107.75 449.937 87.484 437.437 74.984S404.687 62.5 392.187 74.969L346.906 120.219C334.406 132.719 334.406 152.984 346.906 165.484C353.156 171.734 361.344 174.859 369.531 174.859ZM120.656 346.5L75.375 391.75C62.875 404.25 62.875 424.516 75.375 437.016C81.625 443.266 89.813 446.391 98 446.391S114.375 443.266 120.625 437.031L165.906 391.781C178.406 379.281 178.406 359.016 165.906 346.516C153.406 334.016 133.156 334.031 120.656 346.5ZM392.156 346.5C379.656 334.031 359.406 334.016 346.906 346.516C334.406 359.016 334.406 379.281 346.906 391.781L392.188 437.031C398.438 443.266 406.625 446.391 414.813 446.391S431.188 443.266 437.437 437.016C449.937 424.516 449.937 404.25 437.437 391.75L392.156 346.5ZM120.625 74.969C108.125 62.5 87.875 62.484 75.375 74.984S62.875 107.75 75.375 120.25L120.656 165.5C126.906 171.734 135.094 174.859 143.281 174.859S159.656 171.734 165.906 165.484C178.406 152.984 178.406 132.719 165.906 120.219L120.625 74.969Z" />
            <path d="M256 0C238.312 0 224 14.328 224 32V96C224 113.672 238.312 128 256 128S288 113.672 288 96V32C288 14.328 273.688 0 256 0ZM256 384C238.312 384 224 398.328 224 416V480C224 497.672 238.312 512 256 512S288 497.672 288 480V416C288 398.328 273.688 384 256 384ZM480 224H416C398.312 224 384 238.328 384 256S398.312 288 416 288H480C497.688 288 512 273.672 512 256S497.688 224 480 224ZM96 224H32C14.312 224 0 238.328 0 256S14.312 288 32 288H96C113.688 288 128 273.672 128 256S113.688 224 96 224Z" />
    </Icon>
);

export default Loader;