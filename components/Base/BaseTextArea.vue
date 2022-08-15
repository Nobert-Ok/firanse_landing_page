<template>
    <div class="__base-input">
        <label class="form__label" :class="{
            'form__label--focus': focusState == 'focus',
            'form__label--filled': focusState == 'blur' && reactiveValue, 'd-none': placeholder && focusState == 'blur' && !reactiveValue
        }">{{ label }}</label>
        <textarea v-bind="$attrs" v-model="reactiveValue" ref="inputField" @input="e => $emit('input', e)"
            @change="e => $emit('change', e)" @focus="onFocus" @blur="onBlur" :type="type" class="form__input"
            :placeholder="placeholder" rows="4"
            :class="{ 'form__input--FT': focusState == 'focus' && reactiveValue, 'form__input--T': focusState == 'blur' && reactiveValue }"></textarea>
        <span class="form__input__icon" v-if="icon" @click="$emit('iconClicked')">
            <v-icon size="16" :color="focusState == 'focus' ? '#FFA800' : '#aaa'">mdi-{{ icon }}</v-icon>
        </span>
    </div>
</template>
<script>
export default {
    name: "BaseTextArea",
    model: {
        prop: "value",
        event: "input-change",
    },
    data() {
        return {
            default: (" " + this.value).slice(1),
            focusState: "blur",
            reactiveValue: this.value
        }
    },
    beforeDestroy() {
        this.reactiveValue = this.default;
    },
    props: {
        placeholder: {
            type: String
        },
        rules: {
            type: Array
        },
        label: {
            type: String,
            required: true
        },
        icon: {
            type: String
        },
        type: {
            type: String,
            default: 'text'
        },
        value: {
            type: [String, Number],
            default: undefined
        }
    },
    watch: {
        value(newVal) {
            this.reactiveValue = newVal;
        },
        reactiveValue(newVal) {
            if (this.isDisabled || this.isReadOnly) {
                return;
            }
            this.$emit("input-change", newVal);
            // this.$emit("change", newVal);
        }
    },
    methods: {
        focus() {
            if (this.$refs?.inputField?.focus) {
                this.$refs.inputField.focus();
            }
        },
        onFocus(e) {
            // Emitted when you focus on the input.
            this.focusState = "focus";
            this.$emit("focus", e);
        },

        onBlur(e) {
            // Emitted when you blur off the input.
            this.focusState = "blur";
            this.$emit("blur", e);
        },
    }
}
</script>
<style lang="scss" scoped>
.__base-input {
    position: relative;
}

.form {
    &__label {
        // line-height: 19px;
        font-size: $font-sm;
        position: absolute;
        top: 10px;
        left: 18px;
        z-index: 2;
        color: #aaa;
        background-color: white;

        &--inline {
            display: inline-block;
        }

        &--filled {
            z-index: 2;
            position: absolute;
            top: 5px;
            left: 18px;
            color: '#aaa';
        }

        &--focus {
            z-index: 2;
            position: absolute;
            top: 5px;
            left: 18px;
            color: $primary;
        }
    }

    &__input {
        display: block;
        width: 100%;
        padding: 12px 16px 11px;
        font-size: $font-base;
        line-height: 19px;
        color: inherit;
        font-family: inherit;
        background-color: white;
        background-image: none;
        -webkit-background-clip: padding-box;
        background-clip: padding-box;
        border: 1px solid rgb(226, 226, 226);
        border-radius: $border-radius;
        box-shadow: none;
        transition: all 0.3s ease-in-out;
        max-height: 250px;
        outline: none;
        white-space: nowrap;
        box-sizing: border-box !important;

        &:focus,
        &:active {
            border-color: $primary;
            padding: 25px 16px 11px;
        }

        &[readonly] {
            background-color: $accent;
        }

        &--FT {
            height: 100px;
            border-width: 1px;
            border-radius: 10px;
            border-color: #FFA800;
            // padding-bottom: 0;
            font-size: $font-base;
            background-color: white;
            color: black;
        }

        &--T {
            height: 100px;
            border-width: 1px;
            border-radius: 10px;
            border-color: rgb(226, 226, 226);
            ;
            font-size: $font-base;
            background-color: white;
            // padding: 10;
            color: black;
            padding: 25px 16px 11px;
        }

        &__icon {
            position: absolute;
            top: 10px;
            right: 10px;
        }
    }
}

textarea::placeholder {
    color: rgb(201, 201, 201);
}
</style>