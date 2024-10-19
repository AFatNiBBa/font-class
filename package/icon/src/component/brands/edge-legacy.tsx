
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `edge-legacy` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/edge-legacy?s=brands edge-legacy}
 * @preview ![edge-legacy](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNS43MSwyMjguMTZsLjM1LS40OGMwLC4xNiwwLC4zMi0uMDcuNDhabTQ2MC41OCwxNS41MWMwLTQ0LTcuNzYtODQuNDYtMjguODEtMTIyLjRDNDE2LjUsNDcuODgsMzQzLjkxLDgsMjU4Ljg5LDgsMTE5LDcuNzIsNDAuNjIsMTEzLjIxLDI2LjA2LDIyNy42OGM0Mi40Mi02MS4zMSwxMTcuMDctMTIxLjM4LDIyMC4zNy0xMjUsMCwwLDEwOS42NywwLDk5LjQyLDEwNUgxNzBjNi4zNy0zNy4zOSwxOC41NS01OSwzNC4zNC03OC45My03NS4wNSwzNC45LTEyMS44NSw5Ni4xLTEyMC43NSwxODguMzIuODMsNzEuNDUsNTAuMTMsMTQ0Ljg0LDEyMC43NSwxNzIsODMuMzUsMzEuODQsMTkyLjc3LDcuMiwyNDAuMTMtMjEuMzNWMzYzLjMxQzM2My42LDQxOS44LDE3My42LDQyNC4yMywxNzIuMjEsMjk1Ljc0SDQ4Ni4yOVYyNDMuNjdaIi8+PC9zdmc+|width=32|height=32)
 */
export default function EdgeLegacy(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M25.71,228.16l.35-.48c0,.16,0,.32-.07.48Zm460.58,15.51c0-44-7.76-84.46-28.81-122.4C416.5,47.88,343.91,8,258.89,8,119,7.72,40.62,113.21,26.06,227.68c42.42-61.31,117.07-121.38,220.37-125,0,0,109.67,0,99.42,105H170c6.37-37.39,18.55-59,34.34-78.93-75.05,34.9-121.85,96.1-120.75,188.32.83,71.45,50.13,144.84,120.75,172,83.35,31.84,192.77,7.2,240.13-21.33V363.31C363.6,419.8,173.6,424.23,172.21,295.74H486.29V243.67Z" />
        </Icon>
    </>
}