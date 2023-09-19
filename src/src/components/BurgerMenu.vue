<template>
    <div class="burger-menu" :class="{'active': active}" @click="toggleActive">
        <button type="button" class="burger-button" title="Menu">
            <span class="burger-bar burger-bar--1"></span>
            <span class="burger-bar burger-bar--2"></span>
            <span class="burger-bar burger-bar--3"></span>
        </button>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'Burger',
        props: {
            active: {
                type: Boolean,
                required: true,
                default: false
            }
        },
        methods: {
            toggleActive() {
                this.$emit('toggle-menu');
            } 
        }
    }
</script>

<style scoped>
    .hidden {
        visibility: hidden;
    }

    button {
        cursor: pointer;
    }

    /* remove blue outline */
    button:focus {
        outline: 0;
    }

    .burger-button {
        position: relative;
        float: right;
        height: 30px;
        width: 40px;
        border: 0;
        border-radius: 0;
        background-color: transparent;
        pointer-events: all;
        margin: 1em;
    }

    .burger-bar {
        background-color: #fff;
        position: absolute;
        top: 50%;
        right: 6px;
        left: 6px;
        height: 3px;
        width: auto;
        margin-top: -1px;
    }

    .burger-bar--1 {
        -webkit-transform: translateY(-6px);
        transform: translateY(-6px);
        top: 40%;
    }

    .burger-bar--2 {
        transform-origin: 100% 50%;
        transform: scaleX(1);
    }

    .burger-bar--3 {
        transform: translateY(6px);
        top: 60%;
    }

    @media screen and (max-width: 1025px) {
        .burger-menu {
            display: flex;
            justify-content: end;
        }
    }

    @media screen and (min-width: 1024px) {
        .burger-menu {
            display: none;
        }
    }
</style>