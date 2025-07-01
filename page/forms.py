from django import forms

class CallMasterForm(forms.Form):
    phone = forms.CharField(
        label='',
        max_length=20,
        widget=forms.TextInput(attrs={
            'placeholder': '+998(__) ___-__-__',
            'class': 'phone-input',
            'style': 'border-radius: 30px; padding-left: 4px; height: 48px; font-size: 18px; width: 100%;',
            'autocomplete': 'tel',
            'inputmode': 'tel',
            'type': 'tel',
        })
    ) 