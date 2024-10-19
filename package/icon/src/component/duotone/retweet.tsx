
import { Icon, generic } from "../../index";

/**
 * A component that renders the `retweet` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/retweet?s=duotone retweet}
 * @preview ![retweet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI4Ny40MTUgNDE1Ljk5OEgxMzZDMTAwLjY1NCA0MTUuOTk4IDcyIDM4Ny4zNDQgNzIgMzUxLjk5OFYxOTIuMDIxSDMyQzIyLjI5NyAxOTIuMDIxIDEzLjU0NyAxODYuMTc4IDkuODI4IDE3Ny4yMDdTOC4xNzIgMTU3LjkyMiAxNS4wMzEgMTUxLjA0N0w5NS4wMzEgNzEuMDMzQzk5LjcxOSA2Ni4zNDQgMTA1Ljg1OSA2NCAxMTIgNjRTMTI0LjI4MSA2Ni4zNDQgMTI4Ljk2OSA3MS4wMzNMMjA4Ljk2OSAxNTEuMDQ3QzIxNS44MjggMTU3LjkyMiAyMTcuODkxIDE2OC4yMzYgMjE0LjE3MiAxNzcuMjA3UzIwMS43MDMgMTkyLjAyMSAxOTIgMTkyLjAyMUgxNTJWMzM1Ljk4NEgyODcuNDE1QzI5OC4wMjYgMzM1Ljk4NCAzMDguMjAxIDM0MC4xOTkgMzE1LjcwNCAzNDcuNzAyTDMxNS43MDQgMzQ3LjcwMkMzNDAuOTA3IDM3Mi45MDUgMzIzLjA1NyA0MTUuOTk4IDI4Ny40MTUgNDE1Ljk5OFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNTkyLjQ3MSAzNjAuOTUzTDUxMi40NzEgNDQwLjk2N0M1MDcuNzgzIDQ0NS42NTYgNTAxLjY0MyA0NDggNDk1LjUwMiA0NDhTNDgzLjIyMSA0NDUuNjU2IDQ3OC41MzMgNDQwLjk2N0wzOTguNTMzIDM2MC45NTNDMzkxLjY3NCAzNTQuMDc2IDM4OS42MTEgMzQzLjc2NCAzOTMuMzMgMzM0Ljc5M1M0MDUuNzk5IDMxOS45NzcgNDE1LjUwMiAzMTkuOTc3SDQ1NS41MDJWMTc2LjAxNEgzMjAuMDg3QzMwOS40NzcgMTc2LjAxNCAyOTkuMzAxIDE3MS43OTkgMjkxLjc5OCAxNjQuMjk2TDI5MS43OTggMTY0LjI5NkMyNjYuNTk1IDEzOS4wOTMgMjg0LjQ0NSA5NiAzMjAuMDg3IDk2SDQ3MS41MDJDNTA2Ljg0OCA5NiA1MzUuNTAyIDEyNC42NTQgNTM1LjUwMiAxNjBWMzE5Ljk3N0g1NzUuNTAyQzU4NS4yMDUgMzE5Ljk3NyA1OTMuOTU1IDMyNS44MjIgNTk3LjY3NCAzMzQuNzkzUzU5OS4zMyAzNTQuMDc2IDU5Mi40NzEgMzYwLjk1M1oiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
const Retweet: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M287.415 415.998H136C100.654 415.998 72 387.344 72 351.998V192.021H32C22.297 192.021 13.547 186.178 9.828 177.207S8.172 157.922 15.031 151.047L95.031 71.033C99.719 66.344 105.859 64 112 64S124.281 66.344 128.969 71.033L208.969 151.047C215.828 157.922 217.891 168.236 214.172 177.207S201.703 192.021 192 192.021H152V335.984H287.415C298.026 335.984 308.201 340.199 315.704 347.702L315.704 347.702C340.907 372.905 323.057 415.998 287.415 415.998Z" />
            <path d="M592.471 360.953L512.471 440.967C507.783 445.656 501.643 448 495.502 448S483.221 445.656 478.533 440.967L398.533 360.953C391.674 354.076 389.611 343.764 393.33 334.793S405.799 319.977 415.502 319.977H455.502V176.014H320.087C309.477 176.014 299.301 171.799 291.798 164.296L291.798 164.296C266.595 139.093 284.445 96 320.087 96H471.502C506.848 96 535.502 124.654 535.502 160V319.977H575.502C585.205 319.977 593.955 325.822 597.674 334.793S599.33 354.076 592.471 360.953Z" />
    </Icon>
);

export default Retweet;