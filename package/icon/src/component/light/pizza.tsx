
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `pizza` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/pizza?s=light pizza}
 * @preview ![pizza](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MTQuNDY2IDQxNC40NjdDMzI3LjA1NCA1MDEuODU0IDE4NC44NzMgNTAxLjgyMiA5Ny41MjMgNDE0LjQ2N0MxMC4xNDQgMzI3LjA4MiAxMC4xNDQgMTg0LjkxOCA5Ny41MjMgOTcuNTMxQzE4NC45MzUgMTAuMTc2IDMyNy4wNTQgMTAuMTc2IDQxNC40NjYgOTcuNTMxQzQyMC43MTggMTAzLjc4NSA0MzAuODQ3IDEwMy43ODUgNDM3LjA5OSA5Ny41MzFDNDQzLjM1MyA5MS4yNzkgNDQzLjM1MyA4MS4xNDggNDM3LjA5OSA3NC44OTVDMzg3LjI1NCAyNS4wNDUgMzIxLjc5NSAwLjA4IDI1Ni4zMTIgMEMxOTAuNjE3IC0wLjA4IDEyNC44OTcgMjQuODg1IDc0Ljg5IDc0Ljg5NUMyNC45NjMgMTI0LjgyNSAwIDE5MC40MTIgMCAyNTUuOTk5QzAgMzIxLjU4NiAyNC45NjMgMzg3LjE3MyA3NC44OSA0MzcuMTA0QzEyNC44MTYgNDg3LjAzNSAxOTAuNDA2IDUxMiAyNTUuOTk2IDUxMkMzMjEuNTgzIDUxMiAzODcuMTczIDQ4Ny4wMzUgNDM3LjA5OSA0MzcuMTA0QzQ0My4zNTMgNDMwLjg1IDQ0My4zNTMgNDIwLjcyMSA0MzcuMDk5IDQxNC40NjdDNDMwLjg0NyA0MDguMjE1IDQyMC43MTggNDA4LjIxNSA0MTQuNDY2IDQxNC40NjdaTTM5NS4xNzcgMTQyLjgwM0M0MDEuNDI5IDEzNi41NTEgNDAxLjQyOSAxMjYuNDIgMzk1LjE3NyAxMjAuMTY4QzM1OC45MTIgODMuODg1IDMxMC42NzMgNjMuOTA2IDI1OS4zNzEgNjMuOTA2QzIwOC4wNyA2My45MDYgMTU5LjgzIDgzLjg4NSAxMjMuNTM1IDEyMC4xNjhDNDguNjYgMTk1LjA2NCA0OC42NiAzMTYuOTM2IDEyMy41MzUgMzkxLjgzMkMxNTkuODMgNDI4LjExNSAyMDguMDcgNDQ4LjA5NCAyNTkuMzcxIDQ0OC4wOTRDMzEwLjY3MyA0NDguMDk0IDM1OC45MTIgNDI4LjExNSAzOTUuMTc3IDM5MS44MzJDNDAxLjQyOSAzODUuNTc4IDQwMS40MjkgMzc1LjQ0OSAzOTUuMTc3IDM2OS4xOTVDMzg4LjkyMyAzNjIuOTQxIDM3OC43OTQgMzYyLjk0MSAzNzIuNTQyIDM2OS4xOTVDMzQyLjMxMiAzOTkuNDMgMzAyLjEwNyA0MTYuMDc4IDI1OS4zNzEgNDE2LjA3OEMyMTYuNjAzIDQxNi4wNzggMTc2LjQgMzk5LjQzIDE0Ni4xNjkgMzY5LjE5NUM4My43NjkgMzA2Ljc3MyA4My43NjkgMjA1LjIyNSAxNDYuMTY5IDE0Mi44MDNDMTc2LjQgMTEyLjU3IDIxNi42MDMgOTUuOTIyIDI1OS4zNzEgOTUuOTIyQzMwMi4xMDcgOTUuOTIyIDM0Mi4zMTIgMTEyLjU3IDM3Mi41NDIgMTQyLjgwM0MzNzguNzk0IDE0OS4wNTcgMzg4LjkyMyAxNDkuMDU3IDM5NS4xNzcgMTQyLjgwM1pNNTA3LjQ0MSAxMDAuNjQzQzUwNC40NDEgOTcuNjI1IDUwMC4zNzYgOTUuOTIyIDQ5Ni4xMjUgOTUuOTIySDQ5Ni4wOTNDNDkxLjg0MSA5NS45MjIgNDg3Ljc3NyA5Ny42MDkgNDg0Ljc3NSAxMDAuNjExTDM0MC43MTYgMjQ0LjY4MkMzMzcuNjU0IDI0Ny43NDYgMzM1Ljk2NCAyNTEuOTIgMzM2LjAyNyAyNTYuMjVTMzM3LjkwNCAyNjQuNzA3IDM0MS4wNiAyNjcuNjYyTDQ5NC40MzUgNDExLjczMkM0OTcuNTMxIDQxNC42MzkgNTAxLjQ3IDQxNi4wNzggNTA1LjQxIDQxNi4wNzhDNTA5LjUzNyA0MTYuMDc4IDUxMy42MzIgNDE0LjQ5OCA1MTYuNzU3IDQxMS4zNTdDNTU4LjAwOCAzNjkuODE0IDU3Ny41ODcgMzE0LjE5NiA1NzUuODk5IDI1Ny45MzRDNTc0LjIxMSAyMDEuNjcyIDU1MS4yNTYgMTQ0Ljc2NiA1MDcuNDQxIDEwMC42NDNaTTUwNC41MDMgMzc3LjI2MkwzNzUuMDQ0IDI1NS42NDFMNDk1LjYyNSAxMzUuMDM1QzU1Ni42ODEgMjA2Ljc0IDU2MC40IDMwOS41NTcgNTA0LjUwMyAzNzcuMjYyWk0yMzkuOTg4IDE2Ny45NTdDMjM5Ljk4OCAxNTQuNjk1IDIyOS4yMzggMTQzLjk0NSAyMTUuOTc4IDE0My45NDVTMTkxLjk2OCAxNTQuNjk1IDE5MS45NjggMTY3Ljk1N1MyMDIuNzE4IDE5MS45NjkgMjE1Ljk3OCAxOTEuOTY5UzIzOS45ODggMTgxLjIxOSAyMzkuOTg4IDE2Ny45NTdaTTEyNy45NDMgMjY0LjAwNEMxMjcuOTQzIDI3Ny4yNjYgMTM4LjY5MyAyODguMDE2IDE1MS45NTMgMjg4LjAxNlMxNzUuOTYyIDI3Ny4yNjYgMTc1Ljk2MiAyNjQuMDA0UzE2NS4yMTIgMjM5Ljk5MiAxNTEuOTUzIDIzOS45OTJTMTI3Ljk0MyAyNTAuNzQyIDEyNy45NDMgMjY0LjAwNFpNMjQ3Ljk5MiAzODQuMDYyQzI2MS4yNTEgMzg0LjA2MiAyNzIuMDAxIDM3My4zMTIgMjcyLjAwMSAzNjAuMDUxUzI2MS4yNTEgMzM2LjAzOSAyNDcuOTkyIDMzNi4wMzlTMjIzLjk4MiAzNDYuNzg5IDIyMy45ODIgMzYwLjA1MVMyMzQuNzMyIDM4NC4wNjIgMjQ3Ljk5MiAzODQuMDYyWk00NTYuMDc2IDI1NkM0NDIuODE2IDI1NiA0MzIuMDY2IDI2Ni43NSA0MzIuMDY2IDI4MC4wMTJTNDQyLjgxNiAzMDQuMDIzIDQ1Ni4wNzYgMzA0LjAyM0M0NjkuMzM3IDMwNC4wMjMgNDgwLjA4NSAyOTMuMjczIDQ4MC4wODUgMjgwLjAxMlM0NjkuMzM3IDI1NiA0NTYuMDc2IDI1NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Pizza(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M414.466 414.467C327.054 501.854 184.873 501.822 97.523 414.467C10.144 327.082 10.144 184.918 97.523 97.531C184.935 10.176 327.054 10.176 414.466 97.531C420.718 103.785 430.847 103.785 437.099 97.531C443.353 91.279 443.353 81.148 437.099 74.895C387.254 25.045 321.795 0.08 256.312 0C190.617 -0.08 124.897 24.885 74.89 74.895C24.963 124.825 0 190.412 0 255.999C0 321.586 24.963 387.173 74.89 437.104C124.816 487.035 190.406 512 255.996 512C321.583 512 387.173 487.035 437.099 437.104C443.353 430.85 443.353 420.721 437.099 414.467C430.847 408.215 420.718 408.215 414.466 414.467ZM395.177 142.803C401.429 136.551 401.429 126.42 395.177 120.168C358.912 83.885 310.673 63.906 259.371 63.906C208.07 63.906 159.83 83.885 123.535 120.168C48.66 195.064 48.66 316.936 123.535 391.832C159.83 428.115 208.07 448.094 259.371 448.094C310.673 448.094 358.912 428.115 395.177 391.832C401.429 385.578 401.429 375.449 395.177 369.195C388.923 362.941 378.794 362.941 372.542 369.195C342.312 399.43 302.107 416.078 259.371 416.078C216.603 416.078 176.4 399.43 146.169 369.195C83.769 306.773 83.769 205.225 146.169 142.803C176.4 112.57 216.603 95.922 259.371 95.922C302.107 95.922 342.312 112.57 372.542 142.803C378.794 149.057 388.923 149.057 395.177 142.803ZM507.441 100.643C504.441 97.625 500.376 95.922 496.125 95.922H496.093C491.841 95.922 487.777 97.609 484.775 100.611L340.716 244.682C337.654 247.746 335.964 251.92 336.027 256.25S337.904 264.707 341.06 267.662L494.435 411.732C497.531 414.639 501.47 416.078 505.41 416.078C509.537 416.078 513.632 414.498 516.757 411.357C558.008 369.814 577.587 314.196 575.899 257.934C574.211 201.672 551.256 144.766 507.441 100.643ZM504.503 377.262L375.044 255.641L495.625 135.035C556.681 206.74 560.4 309.557 504.503 377.262ZM239.988 167.957C239.988 154.695 229.238 143.945 215.978 143.945S191.968 154.695 191.968 167.957S202.718 191.969 215.978 191.969S239.988 181.219 239.988 167.957ZM127.943 264.004C127.943 277.266 138.693 288.016 151.953 288.016S175.962 277.266 175.962 264.004S165.212 239.992 151.953 239.992S127.943 250.742 127.943 264.004ZM247.992 384.062C261.251 384.062 272.001 373.312 272.001 360.051S261.251 336.039 247.992 336.039S223.982 346.789 223.982 360.051S234.732 384.062 247.992 384.062ZM456.076 256C442.816 256 432.066 266.75 432.066 280.012S442.816 304.023 456.076 304.023C469.337 304.023 480.085 293.273 480.085 280.012S469.337 256 456.076 256Z" />
        </Icon>
    </>
}