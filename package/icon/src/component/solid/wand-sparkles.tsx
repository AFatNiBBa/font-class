
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `wand-sparkles` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/wand-sparkles?s=solid wand-sparkles}
 * @preview ![wand-sparkles](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zLjY4MiAxNDkuOTYxTDUzLjMyMSAxNzAuNjY0TDc0LjAxOSAyMjAuMzAxQzc1LjAzNSAyMjIuMzQ0IDc3LjcwNSAyMjQgNzkuOTg0IDIyNEM3OS45OTIgMjI0IDgwIDIyMy45OTIgODAuMDA4IDIyMy45OTJMODAuMDExIDIyNEw4MC4wMTcgMjIzLjk5MkM4Mi4yODkgMjIzLjk3NyA4NC45MzEgMjIyLjMzNiA4NS45NDMgMjIwLjMwMUwxMDYuNTAxIDE3MS4wMDRMMTA2LjY2NyAxNzAuNjcyTDEwNi45MDEgMTcwLjU1NUwxNTYuMjg1IDE0OS45NjFDMTU4LjMwOCAxNDguOTUzIDE1OS45NDkgMTQ2LjI4OSAxNTkuOTYgMTQ0LjAyM0wxNjAuMDA5IDE0NEwxNTkuOTYgMTQzLjk3N0MxNTkuOTQ5IDE0MS43MDcgMTU4LjMxIDEzOS4wNDcgMTU2LjI4NSAxMzguMDM5TDEwNi44NzggMTE3LjQzNEwxMDYuNjY3IDExNy4zMjhMMTA2LjUwNyAxMTcuMDA4TDg1Ljk0MyA2Ny42OTVDODQuOTMxIDY1LjY2NCA4Mi4yODkgNjQuMDIzIDgwLjAxNyA2NC4wMDhMODAuMDExIDY0TDgwLjAwOCA2NC4wMDhDODAgNjQuMDA4IDc5Ljk5MiA2NCA3OS45ODQgNjRDNzcuNzA1IDY0IDc1LjAzNSA2NS42NTIgNzQuMDE5IDY3LjY5NUw1My4zMjEgMTE3LjMzNkwzLjY4MiAxMzguMDM5QzEuNjUyIDEzOS4wNTUgMCAxNDEuNzE5IDAgMTQ0QzAgMTQ2LjI2NiAxLjY1MiAxNDguOTQ1IDMuNjgyIDE0OS45NjFaTTUxMS45ODQgMzY3Ljk5MkM1MTEuOTggMzY1LjcxOSA1MTAuMzMxIDM2My4wNTUgNTA4LjMwMiAzNjIuMDM5TDQ1OC43MzEgMzQxLjM2N0w0NTguNjU3IDM0MS4zMjhMNDM3Ljk2IDI5MS42OTVDNDM2Ljk0NSAyODkuNjUyIDQzNC4yNzkgMjg4IDQzMi4wMDIgMjg4QzQyOS43MiAyODggNDI3LjA1MyAyODkuNjUyIDQyNi4wMzcgMjkxLjY5NUw0MDUuMzQgMzQxLjMyOEw0MDUuMjkxIDM0MS4zNTVMMzU1LjY5OSAzNjIuMDM5QzM1My42NzIgMzYzLjA1NSAzNTIuMDIzIDM2NS43MTkgMzUyLjAyIDM2Ny45OTJMMzUyLjAwNCAzNjhMMzUyLjAyMSAzNjguMDA4QzM1Mi4wMjUgMzcwLjI3IDM1My42NzQgMzcyLjk0OSAzNTUuNjk5IDM3My45NjFMNDA1LjI2OCAzOTQuNjMzTDQwNS4zNDIgMzk0LjY3Mkw0MjYuMDM3IDQ0NC4zMDFDNDI3LjA1MyA0NDYuMzQ0IDQyOS43MiA0NDggNDMyLjAwMiA0NDhDNDM0LjI3OSA0NDggNDM2Ljk0NSA0NDYuMzQ0IDQzNy45NiA0NDQuMzAxTDQ1OC42NTUgMzk0LjY3Mkg0NTguNjU3TDQ1OC43NTUgMzk0LjYyNUw1MDguMzAyIDM3My45NjFDNTEwLjMzIDM3Mi45NDkgNTExLjk3OCAzNzAuMjcgNTExLjk4MiAzNjguMDA4TDUxMS45OTkgMzY4TDUxMS45ODQgMzY3Ljk5MlpNMjA3Ljk5NiA2NEwyMjAuNDE2IDkzLjc4MUMyMjEuMDI1IDk1LjAwOCAyMjIuNjI3IDk2IDIyMy45OTQgOTZDMjI1LjM2MSA5NiAyMjYuOTYgOTUuMDA4IDIyNy41NyA5My43ODFMMjM5Ljk4OSA2NEwyNjkuNzc0IDUxLjU3OEMyNzAuOTkyIDUwLjk2OSAyNzEuOTg1IDQ5LjM1OSAyNzEuOTg1IDQ4QzI3MS45ODUgNDYuNjMzIDI3MC45OTIgNDUuMDMxIDI2OS43NzQgNDQuNDIyTDIzOS45ODkgMzJMMjI3LjU3IDIuMjE5QzIyNi45NiAwLjk5MiAyMjUuMzYxIDAgMjIzLjk5NCAwQzIyMi42MjcgMCAyMjEuMDI1IDAuOTkyIDIyMC40MTYgMi4yMTlMMjA3Ljk5NiAzMkwxNzguMjEyIDQ0LjQyMkMxNzYuOTk1IDQ1LjAzMSAxNzYuMDAzIDQ2LjYzMyAxNzYuMDAzIDQ4QzE3Ni4wMDMgNDkuMzU5IDE3Ni45OTUgNTAuOTY5IDE3OC4yMTIgNTEuNTc4TDIwNy45OTYgNjRaTTM5OS45NzcgMTkyLjAwOEM0MDguODUyIDE5Mi4wMDggNDE1Ljk3NSAxODQuODgzIDQxNS45NzUgMTc2LjAwOFYxNDguMDEyTDUwNy44MzkgNDYuMjY2QzUxMy41ODkgMzkuODk1IDUxMy4zMzkgMzAuMjcgNTA3LjMzOSAyNC4xNDVMNDg3Ljg0MiA0Ljc3M0M0ODEuNzE3IC0xLjM1MiA0NzIuMDk0IC0xLjYwMiA0NjUuNzE5IDQuMTQ4TDE4Ni42MjggMjU2LjAwOEgxNDQuMDA4QzEzNS4xMzMgMjU2LjAwOCAxMjguMDEgMjYzLjEyOSAxMjguMDEgMjcyLjAwNFYzMDguODc1TDEwLjUyMyA0MTQuODY3Qy0yLjk3NSA0MjcuMTE3IC0zLjYgNDQ4LjI0MiA5LjM5OCA0NjEuMjQyTDUwLjc2OCA1MDIuNjE3QzYzLjc2OCA1MTUuNjEzIDg0Ljg5IDUxNC45ODggOTcuMTM4IDUwMS40OTJMMzc2LjM1NSAxOTIuMDA4SDM5OS45NzdaIi8+PC9zdmc+|width=32|height=32)
 */
export default function WandSparkles(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M3.682 149.961L53.321 170.664L74.019 220.301C75.035 222.344 77.705 224 79.984 224C79.992 224 80 223.992 80.008 223.992L80.011 224L80.017 223.992C82.289 223.977 84.931 222.336 85.943 220.301L106.501 171.004L106.667 170.672L106.901 170.555L156.285 149.961C158.308 148.953 159.949 146.289 159.96 144.023L160.009 144L159.96 143.977C159.949 141.707 158.31 139.047 156.285 138.039L106.878 117.434L106.667 117.328L106.507 117.008L85.943 67.695C84.931 65.664 82.289 64.023 80.017 64.008L80.011 64L80.008 64.008C80 64.008 79.992 64 79.984 64C77.705 64 75.035 65.652 74.019 67.695L53.321 117.336L3.682 138.039C1.652 139.055 0 141.719 0 144C0 146.266 1.652 148.945 3.682 149.961ZM511.984 367.992C511.98 365.719 510.331 363.055 508.302 362.039L458.731 341.367L458.657 341.328L437.96 291.695C436.945 289.652 434.279 288 432.002 288C429.72 288 427.053 289.652 426.037 291.695L405.34 341.328L405.291 341.355L355.699 362.039C353.672 363.055 352.023 365.719 352.02 367.992L352.004 368L352.021 368.008C352.025 370.27 353.674 372.949 355.699 373.961L405.268 394.633L405.342 394.672L426.037 444.301C427.053 446.344 429.72 448 432.002 448C434.279 448 436.945 446.344 437.96 444.301L458.655 394.672H458.657L458.755 394.625L508.302 373.961C510.33 372.949 511.978 370.27 511.982 368.008L511.999 368L511.984 367.992ZM207.996 64L220.416 93.781C221.025 95.008 222.627 96 223.994 96C225.361 96 226.96 95.008 227.57 93.781L239.989 64L269.774 51.578C270.992 50.969 271.985 49.359 271.985 48C271.985 46.633 270.992 45.031 269.774 44.422L239.989 32L227.57 2.219C226.96 0.992 225.361 0 223.994 0C222.627 0 221.025 0.992 220.416 2.219L207.996 32L178.212 44.422C176.995 45.031 176.003 46.633 176.003 48C176.003 49.359 176.995 50.969 178.212 51.578L207.996 64ZM399.977 192.008C408.852 192.008 415.975 184.883 415.975 176.008V148.012L507.839 46.266C513.589 39.895 513.339 30.27 507.339 24.145L487.842 4.773C481.717 -1.352 472.094 -1.602 465.719 4.148L186.628 256.008H144.008C135.133 256.008 128.01 263.129 128.01 272.004V308.875L10.523 414.867C-2.975 427.117 -3.6 448.242 9.398 461.242L50.768 502.617C63.768 515.613 84.89 514.988 97.138 501.492L376.355 192.008H399.977Z" />
        </Icon>
    </>
}