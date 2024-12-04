<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DishRequest extends FormRequest {
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize() : bool {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules() : array {
        return [
            'name' => ['required', 'string', 'min:1', 'max:250'],
            'description' => ['nullable', 'string', 'min:1', 'max:500'],
            'price' => ['required', 'numeric', 'decimal:2', 'min:0', 'max:100'],
            'is_visible' => ['required', 'boolean'],
            'img' => ['nullable', 'image', 'max:256']
        ];
    }
}
