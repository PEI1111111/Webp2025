# Generated by Django 5.1.6 on 2025-03-15 16:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('myhello', '0002_auto_20250315_1623'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='course',
            name='created_at',
        ),
    ]
