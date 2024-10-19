
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `ice-cream` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/ice-cream?s=thin ice-cream}
 * @preview ![ice-cream](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNDQuMDE3IDI4Ny45NDlDMzQxLjA3MSAyODcuOTQ5IDMzOC4yMDggMjg5LjU5NCAzMzYuODEzIDI5Mi40NTNMMjQzLjU5NCA0ODMuNjgxQzI0MC4wOTQgNDkxLjE1MiAyMzIuNDA2IDQ5NS45OTYgMjI0IDQ5NS45OTZTMjA3LjkwNiA0OTEuMTUyIDIwNC4zNDQgNDgzLjU1NkwxMTEuMTg4IDI5Mi40NTNDMTA5Ljc5MyAyODkuNTk2IDEwNi45NDkgMjg3LjkzNSAxMDQuMDAzIDI4Ny45MzVDOTkuODc4IDI4Ny45MzUgOTUuOTk5IDI5MS4yODMgOTUuOTk5IDI5NS45NTFDOTUuOTk5IDI5Ny4xMjggOTYuMjYxIDI5OC4zMjQgOTYuODEyIDI5OS40NTRMMTg5LjkwNiA0OTAuNDMzQzE5Ni4wMTYgNTAzLjUyOSAyMDkuNDA2IDUxMiAyMjQgNTEyUzI1MS45ODQgNTAzLjUyOSAyNTguMDMxIDQ5MC41NThMMzUxLjE4OCAyOTkuNDU0QzM1MS43MzkgMjk4LjMyNCAzNTIuMDAxIDI5Ny4xMjggMzUyLjAwMSAyOTUuOTUxQzM1Mi4wMDEgMjkxLjIyNiAzNDguMDkzIDI4Ny45NDkgMzQ0LjAxNyAyODcuOTQ5Wk0zNjkuNzM0IDE1MC41NzlDMzY5Ljg4MyAxNDcuOTY3IDM2OS45NTcgMTQ1LjM1OSAzNjkuOTU3IDE0Mi43NThDMzY5Ljk1NyAxMDUuODkxIDM0MC4wMzggMCAyMjQgMEMxMDYuOTQ1IDAgNzguMDQzIDEwNi4yMTEgNzguMDQzIDE0Mi43NThDNzguMDQzIDE0NS4zNTkgNzguMTE3IDE0Ny45NjcgNzguMjY2IDE1MC41NzlDNTIuMTQxIDE1NC4yNjcgMzIgMTc2LjM2NiAzMiAyMDIuOTk2QzMyIDIzMi4xOSA1Ni4yMTkgMjU1Ljk0NSA4NiAyNTUuOTQ1SDM2MkMzOTEuNzgxIDI1NS45NDUgNDE2IDIzMi4xOSA0MTYgMjAyLjk5NkM0MTYgMTc2LjM2NiAzOTUuODU5IDE1NC4yNjcgMzY5LjczNCAxNTAuNTc5Wk0zNjIgMjM5Ljk0Mkg4NkM2NS4wNDcgMjM5Ljk0MiA0OCAyMjMuMzc2IDQ4IDIwMi45OTZTNjUuMDQ3IDE2Ni4wNTEgODYuOTUzIDE2Ni4wNTFIOTUuOTUzTDk0Ljg5MSAxNTcuMTEyQzk0LjMyMyAxNTIuMzIgOTQuMDQ0IDE0Ny41MzIgOTQuMDQ0IDE0Mi43NjlDOTQuMDQ0IDczLjc0MiAxNTAuOTczIDE2LjAxOSAyMjQgMTYuMDE5QzI5Ni44OTcgMTYuMDE5IDM1My45NTYgNzMuNjM5IDM1My45NTYgMTQyLjc2OUMzNTMuOTU2IDE0Ny41MzIgMzUzLjY3NyAxNTIuMzIgMzUzLjEwOSAxNTcuMTEyTDM1Mi4wNDcgMTY2LjA1MUgzNjJDMzgyLjk1MyAxNjYuMDUxIDQwMCAxODIuNjE3IDQwMCAyMDIuOTk2UzM4Mi45NTMgMjM5Ljk0MiAzNjIgMjM5Ljk0MlogIj48L3BhdGg+PC9zdmc+|width=32|height=32)
 */
export default function IceCream(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M344.017 287.949C341.071 287.949 338.208 289.594 336.813 292.453L243.594 483.681C240.094 491.152 232.406 495.996 224 495.996S207.906 491.152 204.344 483.556L111.188 292.453C109.793 289.596 106.949 287.935 104.003 287.935C99.878 287.935 95.999 291.283 95.999 295.951C95.999 297.128 96.261 298.324 96.812 299.454L189.906 490.433C196.016 503.529 209.406 512 224 512S251.984 503.529 258.031 490.558L351.188 299.454C351.739 298.324 352.001 297.128 352.001 295.951C352.001 291.226 348.093 287.949 344.017 287.949ZM369.734 150.579C369.883 147.967 369.957 145.359 369.957 142.758C369.957 105.891 340.038 0 224 0C106.945 0 78.043 106.211 78.043 142.758C78.043 145.359 78.117 147.967 78.266 150.579C52.141 154.267 32 176.366 32 202.996C32 232.19 56.219 255.945 86 255.945H362C391.781 255.945 416 232.19 416 202.996C416 176.366 395.859 154.267 369.734 150.579ZM362 239.942H86C65.047 239.942 48 223.376 48 202.996S65.047 166.051 86.953 166.051H95.953L94.891 157.112C94.323 152.32 94.044 147.532 94.044 142.769C94.044 73.742 150.973 16.019 224 16.019C296.897 16.019 353.956 73.639 353.956 142.769C353.956 147.532 353.677 152.32 353.109 157.112L352.047 166.051H362C382.953 166.051 400 182.617 400 202.996S382.953 239.942 362 239.942Z " />
        </Icon>
    </>
}