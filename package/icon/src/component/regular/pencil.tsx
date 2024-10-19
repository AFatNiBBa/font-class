
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `pencil` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/pencil?s=regular pencil}
 * @preview ![pencil](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTMuMjEgNTYuMjYyTDQ1NS43MDMgMTguNzQ4QzQ0My4yMDggNi4yNTIgNDI2LjgzIDAgNDEwLjQ1MSAwQzM5NC4wNyAwIDM3Ny42OTUgNi4yNSAzNjUuMTk1IDE4Ljc1TDMxLjAzNyAzNTIuOTU1QzI4LjgwMiAzNTUuMTg5IDI3LjI4MSAzNTguMDMzIDI2LjY2IDM2MS4xMzFMMC4zMiA0OTIuODU0Qy0xLjcwNCA1MDIuOTY3IDYuMTU2IDUxMiAxNS45NDUgNTEyQzE2Ljk5NCA1MTIgMTguMDYyIDUxMS44OTYgMTkuMTQ0IDUxMS42OEwxNTAuODU1IDQ4NS4zMzZDMTUzLjk1MyA0ODQuNzE3IDE1Ni43OTYgNDgzLjE5NSAxNTkuMDMxIDQ4MC45NjNDMTU5LjAzMSA0ODAuOTYzIDQ4OS4yOTIgMTUwLjY4NCA0OTMuMyAxNDYuNjc2QzUxOC4yOTIgMTIxLjY4NCA1MTguMjAxIDgxLjI1NiA0OTMuMjEgNTYuMjYyWk0xMzEuOTQ1IDQ0MC4xNjhMNTYuOCA0NTUuMTk3TDcxLjgyOCAzODAuMDQ3TDk2IDM1NS44NzVWNDE2SDE1Ni4xMTVMMTMxLjk0NSA0NDAuMTY4Wk0xNDQgMzY4VjMwNy44NzFMMzIwLjk0OSAxMzAuOTE2TDM4MS4wNjQgMTkxLjAzNUwyMDQuMTE1IDM2OEgxNDRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Pencil(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M493.21 56.262L455.703 18.748C443.208 6.252 426.83 0 410.451 0C394.07 0 377.695 6.25 365.195 18.75L31.037 352.955C28.802 355.189 27.281 358.033 26.66 361.131L0.32 492.854C-1.704 502.967 6.156 512 15.945 512C16.994 512 18.062 511.896 19.144 511.68L150.855 485.336C153.953 484.717 156.796 483.195 159.031 480.963C159.031 480.963 489.292 150.684 493.3 146.676C518.292 121.684 518.201 81.256 493.21 56.262ZM131.945 440.168L56.8 455.197L71.828 380.047L96 355.875V416H156.115L131.945 440.168ZM144 368V307.871L320.949 130.916L381.064 191.035L204.115 368H144Z" />
        </Icon>
    </>
}