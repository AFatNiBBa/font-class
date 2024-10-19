
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `naira-sign` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/naira-sign?s=light naira-sign}
 * @preview ![naira-sign](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MzIgMjU2SDM4NFY0OEMzODQgMzkuMTU2IDM3Ni44NDQgMzIgMzY4IDMyUzM1MiAzOS4xNTYgMzUyIDQ4VjI1NkgyNDMuNDU3TDkzLjE1NiAzOC45MDZDODkuMTg4IDMzLjE1NiA4MS45NjkgMzAuNzUgNzUuMjE5IDMyLjcxOUM2OC41NjIgMzQuODEyIDY0IDQxIDY0IDQ4VjI1NkgxNkM3LjE1NiAyNTYgMCAyNjMuMTU2IDAgMjcyUzcuMTU2IDI4OCAxNiAyODhINjRWNDY0QzY0IDQ3Mi44NDQgNzEuMTU2IDQ4MCA4MCA0ODBTOTYgNDcyLjg0NCA5NiA0NjRWMjg4SDIyNi42OTlMMzU0Ljg0NCA0NzMuMDk0QzM1Ny44NzUgNDc3LjUgMzYyLjg0NCA0ODAgMzY4IDQ4MEMzNjkuNTk0IDQ4MCAzNzEuMTg4IDQ3OS43NSAzNzIuNzgxIDQ3OS4yODFDMzc5LjQzOCA0NzcuMTg4IDM4NCA0NzEgMzg0IDQ2NFYyODhINDMyQzQ0MC44NDQgMjg4IDQ0OCAyODAuODQ0IDQ0OCAyNzJTNDQwLjg0NCAyNTYgNDMyIDI1NlpNOTYgMjU2Vjk5LjIxOUwyMDQuNTQzIDI1Nkg5NlpNMzUyIDQxMi43ODFMMjY1LjYxMSAyODhIMzUyVjQxMi43ODFaIi8+PC9zdmc+|width=32|height=32)
 */
export default function NairaSign(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M432 256H384V48C384 39.156 376.844 32 368 32S352 39.156 352 48V256H243.457L93.156 38.906C89.188 33.156 81.969 30.75 75.219 32.719C68.562 34.812 64 41 64 48V256H16C7.156 256 0 263.156 0 272S7.156 288 16 288H64V464C64 472.844 71.156 480 80 480S96 472.844 96 464V288H226.699L354.844 473.094C357.875 477.5 362.844 480 368 480C369.594 480 371.188 479.75 372.781 479.281C379.438 477.188 384 471 384 464V288H432C440.844 288 448 280.844 448 272S440.844 256 432 256ZM96 256V99.219L204.543 256H96ZM352 412.781L265.611 288H352V412.781Z" />
        </Icon>
    </>
}