
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `comment-arrow-up-right` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/comment-arrow-up-right?s=duotone comment-arrow-up-right}
 * @preview ![comment-arrow-up-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAzMkMxMTQuNjI1IDMyIDAgMTI1LjEyNSAwIDI0MEMwIDI4OS42MjUgMjEuMzc1IDMzNSA1NyAzNzAuNzVDNDQuNSA0MjEuMTI1IDIuNzUgNDY2IDIuMjUgNDY2LjVDMCA0NjguNzUgLTAuNjI1IDQ3Mi4yNSAwLjc1IDQ3NS4yNUMyIDQ3OC4yNSA0Ljc1IDQ4MCA4IDQ4MEM3NC4yNSA0ODAgMTI0IDQ0OC4yNSAxNDguNjI1IDQyOC42MjVDMTgxLjI1IDQ0MC44NzUgMjE3LjYyNSA0NDggMjU2IDQ0OEMzOTcuMzc1IDQ0OCA1MTIgMzU0Ljg3NSA1MTIgMjQwUzM5Ny4zNzUgMzIgMjU2IDMyWk0zMzYgMjgwQzMzNiAyOTMuMjUgMzI1LjI1IDMwNCAzMTIgMzA0UzI4OCAyOTMuMjUgMjg4IDI4MFYyMjUuOTM4TDIwMC45NjkgMzEyLjk2N0MxOTEuNTg4IDMyMi4zNDggMTc2LjQwNCAzMjIuMzQyIDE2Ny4wMzEgMzEyLjk2N0MxNTcuNjU2IDMwMy41OTIgMTU3LjY1NiAyODguNDA0IDE2Ny4wMzEgMjc5LjAyOUwyNTQuMDYyIDE5MkgyMDBDMTg2Ljc1IDE5MiAxNzYgMTgxLjI1IDE3NiAxNjhTMTg2Ljc1IDE0NCAyMDAgMTQ0SDMxMkMzMjUuMjUgMTQ0IDMzNiAxNTQuNzUgMzM2IDE2OFYyODBaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTMxMiAxNDRIMjAwQzE4Ni43NSAxNDQgMTc2IDE1NC43NSAxNzYgMTY4UzE4Ni43NSAxOTIgMjAwIDE5MkgyNTQuMDYyTDE2Ny4wMzEgMjc5LjAyOUMxNTcuNjU2IDI4OC40MDQgMTU3LjY1NiAzMDMuNTkyIDE2Ny4wMzEgMzEyLjk2N0MxNzYuNDA0IDMyMi4zNDIgMTkxLjU4OCAzMjIuMzQ4IDIwMC45NjkgMzEyLjk2N0wyODggMjI1LjkzOFYyODBDMjg4IDI5My4yNSAyOTguNzUgMzA0IDMxMiAzMDRTMzM2IDI5My4yNSAzMzYgMjgwVjE2OEMzMzYgMTU0Ljc1IDMyNS4yNSAxNDQgMzEyIDE0NFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function CommentArrowUpRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M256 32C114.625 32 0 125.125 0 240C0 289.625 21.375 335 57 370.75C44.5 421.125 2.75 466 2.25 466.5C0 468.75 -0.625 472.25 0.75 475.25C2 478.25 4.75 480 8 480C74.25 480 124 448.25 148.625 428.625C181.25 440.875 217.625 448 256 448C397.375 448 512 354.875 512 240S397.375 32 256 32ZM336 280C336 293.25 325.25 304 312 304S288 293.25 288 280V225.938L200.969 312.967C191.588 322.348 176.404 322.342 167.031 312.967C157.656 303.592 157.656 288.404 167.031 279.029L254.062 192H200C186.75 192 176 181.25 176 168S186.75 144 200 144H312C325.25 144 336 154.75 336 168V280Z" />
            <path d="M312 144H200C186.75 144 176 154.75 176 168S186.75 192 200 192H254.062L167.031 279.029C157.656 288.404 157.656 303.592 167.031 312.967C176.404 322.342 191.588 322.348 200.969 312.967L288 225.938V280C288 293.25 298.75 304 312 304S336 293.25 336 280V168C336 154.75 325.25 144 312 144Z" />
        </Icon>
    </>
}