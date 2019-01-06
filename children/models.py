# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
#
# Also note: You'll have to insert the output of 'django-admin.py sqlcustom [app_label]'
# into your database.
from __future__ import unicode_literals

from django.db import models

class CmMaster(models.Model):
    def __str__(self):
        return self.first_last
    
    id = models.AutoField(primary_key=True)  # AutoField?
    first_last = models.CharField(max_length=100, blank=True)
    ssgrade = models.CharField(max_length=100, blank=True, null=True)
    ssactive = models.CharField(max_length=100, blank=True, null=True)
    fname = models.CharField(max_length=100, blank=True, null=True)
    lname = models.CharField(max_length=100, blank=True, null=True)
    chinese_name = models.CharField(max_length=100, blank=True, null=True)
    gender = models.CharField(max_length=100, blank=True, null=True)
    grade = models.CharField(max_length=100, blank=True, null=True)
    dob = models.CharField(max_length=100, blank=True, null=True)
    allergies_medical_conditions_medications = models.CharField(max_length=100, blank=True, null=True)
    fathers_english_name = models.CharField(max_length=100, blank=True, null=True)
    fathers_chinese_name_if_available = models.CharField(max_length=100, blank=True, null=True)
    mothers_english_name = models.CharField(max_length=100, blank=True, null=True)
    mother_chinese_name_if_available = models.CharField(max_length=100, blank=True, null=True)
    email = models.CharField(max_length=100, blank=True, null=True)
    street = models.CharField(max_length=100, blank=True, null=True)
    city = models.CharField(max_length=100, blank=True, null=True)
    state = models.CharField(max_length=100, blank=True, null=True)
    zip = models.CharField(max_length=100, blank=True, null=True)
    home = models.CharField(max_length=100, blank=True, null=True)
    fathers_office = models.CharField(max_length=100, blank=True, null=True)
    fathers_cell = models.CharField(max_length=100, blank=True, null=True)
    mothers_office = models.CharField(max_length=100, blank=True, null=True)
    mothers_cell = models.CharField(max_length=100, blank=True, null=True)
    alternate_contact_name = models.CharField(max_length=100, blank=True, null=True)
    alt_contact_main_phone = models.CharField(max_length=100, blank=True, null=True)
    altcont = models.CharField(max_length=100, blank=True, null=True)
    mccc = models.CharField(max_length=100, blank=True, null=True)
    group = models.CharField(max_length=100, blank=True, null=True)
    assign = models.CharField(max_length=100, blank=True, null=True)
    christianfather = models.CharField(max_length=100, blank=True, null=True)
    christianmother = models.CharField(max_length=100, blank=True, null=True)
    remarks = models.CharField(max_length=100, blank=True, null=True)
    felly = models.CharField(max_length=100, blank=True, null=True)
    vbs_2010 = models.CharField(db_column='2010', max_length=100, blank=True, null=True, verbose_name="2010 VBS")
    vbs_2011 = models.CharField(db_column='2011', max_length=100, blank=True, null=True, verbose_name="2011 VBS")
    vbs_2012 = models.CharField(db_column='2012', max_length=100, blank=True, null=True, verbose_name="2012 VBS")
    vbs_2013 = models.CharField(db_column='2013', max_length=100, blank=True, null=True, verbose_name="2013 VBS")
    vbs_2014 = models.CharField(db_column='2014', max_length=100, blank=True, null=True, verbose_name="2014 VBS")
    vbs_2015 = models.CharField(db_column='2015', max_length=100, blank=True, null=True, verbose_name="2015 VBS")
    vbs_2016 = models.CharField(db_column='2016', max_length=100, blank=True, null=True, verbose_name="2016 VBS")
    vbs_2017 = models.CharField(db_column='2017', max_length=100, blank=True, null=True, verbose_name="2017 VBS")
    vbs_2018 = models.CharField(db_column='2018', max_length=100, blank=True, null=True, verbose_name="2018 VBS")

    class Meta:
        db_table = 'MCCC_CM_Master'
        permissions  = (('readonly', 'Can Read Only Children'),)
        verbose_name = "child"
        verbose_name_plural = "children"
