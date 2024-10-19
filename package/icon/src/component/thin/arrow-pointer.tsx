
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-pointer` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-pointer?s=thin arrow-pointer}
 * @preview ![arrow-pointer](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yOTYuNjg0IDI2Ni4xOTFMNTEuODg3IDUzLjM4MUM0Ny44NjcgNDkuODQgNDIuNzc5IDQ4IDM3LjYwOSA0OEMzNC42MDcgNDggMzEuNTc2IDQ4LjYyMSAyOC43MTMgNDkuODkzQzIwLjk3OSA1My4zODEgMTYgNjEuMDg3IDE2IDY5LjU4MVY0MDAuNzk0QzE2IDQwOS44NTEgMjEuNjU0IDQxNy45NTEgMzAuMTQ2IDQyMS4wNzJDMzIuNTggNDIxLjk1OSAzNS4wOTggNDIyLjM5NCAzNy42IDQyMi4zOTRDNDMuODE2IDQyMi4zOTQgNDkuODc3IDQxOS43MDkgNTQuMDUzIDQxNC43ODdMMTM4LjkyIDMxMS45NjNMMjA4Ljc2NiA0NTkuNDIyQzIxMC4xNDEgNDYyLjMxMiAyMTMuMDE2IDQ2NCAyMTYgNDY0QzIxNy4xNTYgNDY0IDIxOC4zMTIgNDYzLjc1IDIxOS40MjIgNDYzLjIzNEMyMjMuNDIyIDQ2MS4zNDQgMjI1LjEyNSA0NTYuNTYyIDIyMy4yMzQgNDUyLjU3OEwxNTIuODU1IDMwMy45OTJIMjgyLjM5NkMyOTEuMzgzIDMwMy45OTIgMjk5LjQyNiAyOTguNDM3IDMwMi42MDQgMjkwLjAyNkMzMDUuNzgzIDI4MS42MzEgMzAzLjQyIDI3Mi4xMzkgMjk2LjY4NCAyNjYuMTkxWk0yODcuNjM3IDI4NC4zN0MyODYuODE4IDI4Ni41MzYgMjg0LjcxMyAyODcuOTkxIDI4Mi4zOTYgMjg3Ljk5MUgxNDUuNUMxNDAuNzI3IDI4Ny45OTEgMTM2LjIwMSAyOTAuMTI0IDEzMy4xNiAyOTMuODA2TDQxLjg1NCA0MDQuNDMyQzQwLjc5NyA0MDUuNjc5IDM5LjI0NiA0MDYuMzk0IDM3LjYgNDA2LjM5NEMzNi45MzYgNDA2LjM5NCAzNi4yNzMgNDA2LjI3NCAzNS42NjYgNDA2LjA1NEMzMy40NzMgNDA1LjI0NyAzMiA0MDMuMTM0IDMyIDQwMC43OTRWNjkuNTgxQzMyIDY3LjM4NCAzMy4yOTMgNjUuMzggMzUuMjA1IDY0LjUxNkMzNS45NzcgNjQuMTc1IDM2Ljc4NyA2NC4wMDEgMzcuNjA5IDY0LjAwMUMzOC45OCA2NC4wMDEgNDAuMjk1IDY0LjQ5MyA0MS4zOTEgNjUuNDU4TDI4Ni4wOTQgMjc4LjE4NkMyODcuODM2IDI3OS43MjMgMjg4LjQ1NyAyODIuMjAzIDI4Ny42MzcgMjg0LjM3WiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ArrowPointer: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M296.684 266.191L51.887 53.381C47.867 49.84 42.779 48 37.609 48C34.607 48 31.576 48.621 28.713 49.893C20.979 53.381 16 61.087 16 69.581V400.794C16 409.851 21.654 417.951 30.146 421.072C32.58 421.959 35.098 422.394 37.6 422.394C43.816 422.394 49.877 419.709 54.053 414.787L138.92 311.963L208.766 459.422C210.141 462.312 213.016 464 216 464C217.156 464 218.312 463.75 219.422 463.234C223.422 461.344 225.125 456.562 223.234 452.578L152.855 303.992H282.396C291.383 303.992 299.426 298.437 302.604 290.026C305.783 281.631 303.42 272.139 296.684 266.191ZM287.637 284.37C286.818 286.536 284.713 287.991 282.396 287.991H145.5C140.727 287.991 136.201 290.124 133.16 293.806L41.854 404.432C40.797 405.679 39.246 406.394 37.6 406.394C36.936 406.394 36.273 406.274 35.666 406.054C33.473 405.247 32 403.134 32 400.794V69.581C32 67.384 33.293 65.38 35.205 64.516C35.977 64.175 36.787 64.001 37.609 64.001C38.98 64.001 40.295 64.493 41.391 65.458L286.094 278.186C287.836 279.723 288.457 282.203 287.637 284.37Z" />
    </Icon>
);

export default ArrowPointer;