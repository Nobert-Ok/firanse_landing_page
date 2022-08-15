<template>
    <!-- <div> -->
    <a v-bind="$attrs" class="a" ref="link" :disabled="isDisabled" @click="handleClick">
        <v-icon v-if="prependIcon" size="16">mdi-{{ prependIcon }}</v-icon>
        {{ name }}
        <v-icon v-if="appendIcon" size="16">mdi-{{ appendIcon }}</v-icon>
    </a>
    <!-- </div> -->
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
        prependIcon: {
            type: String,
        },
        appendIcon: {
            type: String,
        }
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
        }
    },

    methods: {
        handleClick(e) {
            if (this.isDisabled || this.isLoading) {
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
    },
};
</script>

<style lang="scss">
.a {
    display: inline;
    color: red;

    .v-icon {
        color: #FFA800;
    }

    &:hover {
        cursor: pointer;
    }

    &__default {
        color: #FFA800;
    }

    &__danger {
        color: red;
    }

    &__list {
        color: $secondary;
    }



    &[disabled] {
        cursor: not-allowed;
        color: #aaa;

        .v-icon {
            color: #aaa;
        }
    }


    &--sm {
        font-size: $font-sm;
        font-weight: $font-medium;
    }

    &--md {
        font-size: $font-base;
        font-weight: $font-medium;
    }

    &--lg {
        font-size: $font-md;
        font-weight: $font-medium;
    }
}
</style>