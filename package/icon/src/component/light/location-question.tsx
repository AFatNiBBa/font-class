
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `location-question` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/location-question?s=light location-question}
 * @preview ![location-question](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOTIgMEM4NS45NjkgMCAwIDg1Ljk2OSAwIDE5MkMwIDI2OS40MSAyNi45NjkgMjkxLjAzNSAxNzIuMjgxIDUwMS42NzZDMTc3LjA0NyA1MDguNTU5IDE4NC41MjMgNTEyIDE5MiA1MTJTMjA2Ljk1MyA1MDguNTU5IDIxMS43MTkgNTAxLjY3NkMzNTcuMDMxIDI5MS4wMzUgMzg0IDI2OS40MSAzODQgMTkyQzM4NCA4NS45NjkgMjk4LjAzMSAwIDE5MiAwWk0xOTIgNDczLjkxOEM1MS45MzIgMjcxLjM3OSAzMiAyNTUuOTY5IDMyIDE5MkMzMiAxMDMuNzc3IDEwMy43NzUgMzIgMTkyIDMyUzM1MiAxMDMuNzc3IDM1MiAxOTJDMzUyIDI1NS44NzkgMzMyLjU2NiAyNzAuNjc0IDE5MiA0NzMuOTE4Wk0xOTIgMzA0QzE3OC43NjYgMzA0IDE2OCAzMTQuNzY4IDE2OCAzMjguMDA0QzE2OCAzNDEuMjM2IDE3OC43NjYgMzUyIDE5MiAzNTJTMjE2IDM0MS4yMzYgMjE2IDMyOC4wMDRDMjE2IDMxNC43NjggMjA1LjIzNCAzMDQgMTkyIDMwNFpNMTkyIDg4QzE0Ny44ODkgODggMTEyIDExOS45NjkgMTEyIDE1OS4yNjZDMTEyIDE2OC4wODggMTE5LjE3OCAxNzUuMjY2IDEyOCAxNzUuMjY2UzE0NCAxNjguMDg4IDE0NCAxNTkuMjY2QzE0NCAxMzcuNjE1IDE2NS41MzMgMTIwIDE5MiAxMjBTMjQwIDEzNy42MTUgMjQwIDE1OS4yNjZDMjQwIDE3Mi44NTQgMjMxLjUzMyAxODUuMzExIDIxNy4zNSAxOTIuNTg2QzE5MS44NDIgMjA1LjY4OCAxNzYgMjMxLjkzMiAxNzYgMjYxLjA3OEMxNzYgMjY5LjkgMTgzLjE3OCAyNzcuMDc4IDE5MiAyNzcuMDc4UzIwOCAyNjkuOSAyMDggMjYxLjA3OEMyMDggMjQzLjk4IDIxNy4xODQgMjI4LjY0NSAyMzEuOTY3IDIyMS4wNTVDMjU2LjY2IDIwOC4zNzMgMjcyIDE4NC42OTcgMjcyIDE1OS4yNjZDMjcyIDExOS45NjkgMjM2LjExMSA4OCAxOTIgODhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function LocationQuestion(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M192 0C85.969 0 0 85.969 0 192C0 269.41 26.969 291.035 172.281 501.676C177.047 508.559 184.523 512 192 512S206.953 508.559 211.719 501.676C357.031 291.035 384 269.41 384 192C384 85.969 298.031 0 192 0ZM192 473.918C51.932 271.379 32 255.969 32 192C32 103.777 103.775 32 192 32S352 103.777 352 192C352 255.879 332.566 270.674 192 473.918ZM192 304C178.766 304 168 314.768 168 328.004C168 341.236 178.766 352 192 352S216 341.236 216 328.004C216 314.768 205.234 304 192 304ZM192 88C147.889 88 112 119.969 112 159.266C112 168.088 119.178 175.266 128 175.266S144 168.088 144 159.266C144 137.615 165.533 120 192 120S240 137.615 240 159.266C240 172.854 231.533 185.311 217.35 192.586C191.842 205.688 176 231.932 176 261.078C176 269.9 183.178 277.078 192 277.078S208 269.9 208 261.078C208 243.98 217.184 228.645 231.967 221.055C256.66 208.373 272 184.697 272 159.266C272 119.969 236.111 88 192 88Z" />
        </Icon>
    </>
}