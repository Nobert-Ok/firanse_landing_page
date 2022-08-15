<template>
    <button v-bind="$attrs" class='btn btn--default' ref="button" :type="$attrs.type || 'button'" :disabled="isDisabled"
        @click="handleClick" @focus="e => $emit('focus', e)" @blur="e => $emit('blur', e)">
        <v-icon>
            <slot />
        </v-icon>
    </button>
</template>

<script>
export default {
    props: {
        onClick: {
            type: Function,
            default: undefined,
        },
        // btn--transparent-sm btn--default btn--full btn--md
        name: {
            type: String,
            default: 'Continue'
        },
    },

    data() {
        return {
            buttonIsClicked: false,
        };
    },

    computed: {
        isDisabled() {
            if ("disabled" in this.$attrs) {
                return (
                    this.$attrs.disabled !== false && this.$attrs.disabled !== "false"
                );
            } else {
                return false;
            }
        },

        isLoading() {
            if ("loading" in this.$attrs) {
                return (
                    this.$attrs.loading !== false && this.$attrs.loading !== "false"
                );
            } else if (this.buttonIsClicked) {
                return true;
            } else {
                return false;
            }
        },
    },

    methods: {
        handleClick(e) {
            if (this.isDisabled) {
                return;
            }
            if (this.onClick) {
                this.onClickHandler(e);
            } else {
                // This is fired when the button is clicked. Like all JS events this is fire and forget.
                this.$emit("click", e);
            }
        },

        onClickHandler(e) {
            this.buttonIsClicked = true;
            const resolved = Promise.resolve(this.onClick(e));

            resolved.then(() => {
                this.buttonIsClicked = false;
            }).catch(() => {
                this.buttonIsClicked = false;
            });
        },

        focus() {
            this.$refs.button.focus();
        },
    },
};
</script>

<style lang="scss">
.btn {
    border: 1px solid transparent;
    border-radius: $border-radius;
    box-shadow: none;
    // color: $primary;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: inherit;
    font-size: 14px;
    font-weight: $font-medium;
    letter-spacing: 0.0024px;
    line-height: unset;
    padding: 7.5px 16px;
    text-align: center;
    text-decoration: none;
    transition: all 0.3s ease;
    transition-property: background-color, transform;
    user-select: none;
    vertical-align: middle;
    white-space: nowrap;
    width: fit-content;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-appearance: none !important;
    appearance: none !important;

    &:hover {
        cursor: pointer;
    }

    &[disabled] {
        cursor: not-allowed;
        opacity: 0.6;
        pointer-events: none;
    }

    &--default {
        color: $btn-text-color;
        background-color: $primary;

        &:hover {
            background-color: darken($primary, 10%);
        }

        .v-icon {
            color: white
        }
    }

    &--danger {
        background-color: #D82C0D;

        &:hover {
            background-color: darken(#D82C0D, 10%);
        }
    }

    &--tile {
        border-radius: 3px;
    }

    &--loading {
        background-color: darken($primary, 10%);
        cursor: not-allowed;
    }

    &--transparent {
        border: none;

        .v-icon {
            color: #FFA800;
        }
    }

    &--outlined {
        border: 1px solid $primary;
        background-color: white;
        color: #FFA800;

        &:hover {
            background-color: darken(white, 10%);
        }

        .v-icon {
            color: #FFA800;
        }
    }

    &--sm {
        font-size: $font-sm;
        font-weight: $font-medium;
        padding: 10px 10px;

        .v-icon {
            font-size: 16px;
            // width: 108px;
        }
    }

    &--md {
        font-size: $font-base;
        font-weight: $font-medium;
        padding: 15px 30px;

        .v-icon {
            font-size: 20px;
            // width: 108px;
        }
    }

    &--lg {
        font-size: $font-md;
        font-weight: $font-medium;
        padding: 20px 40px;

        .v-icon {
            font-size: 24px;
            // width: 108px;
        }
    }

    &--full {
        width: 100%;
    }
}
</style>